import React, { Component } from 'react';
import { FollowItem } from '../partials/FollowItem';
import { Loader } from '../partials/Loader';
import { Error } from '../partials/Error';

class Follows extends Component {
  _isMounted = false;
  constructor(props) {
    super();
    this.state = {
      userId: props.userId,
      clientId: props.clientId,
      follows: [],
      noFollowsData: false,
      limit: 10,
      offset: 0,
      loadMore: false,
      loadMoreInProgress: false
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.fetchFollows()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  async fetchFollows() {
    try {
      const data = await fetch(`https://api.twitch.tv/kraken/users/${this.state.userId}/follows/channels?limit=${this.state.limit}&offset=` + this.state.offset, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': this.state.clientId
        }
      })
      const res = await data.json()

      if (this._isMounted) {
        if (!res.error && res.follows.length > 0) {
          this.setState({ follows: res.follows, offset: this.state.offset + this.state.limit, loadMore: true })
        } else {
          this.setState({ noFollowsData: true })
        }
      }
    } catch(e) {
      this.setState({ noFollowsData: true })
      console.error(e)
    }
  }

  fetchMoreFollows() {
    fetch(`https://api.twitch.tv/kraken/users/${this.state.userId}/follows/channels?limit=${this.state.limit}&offset=` + this.state.offset, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': this.state.clientId
      }
    })
      .then(response => response.json())
      .then(data => {
        if (!data.follows.length) {
          this.setState({ loadMore: false, loadMoreInProgress: false })
          return
        }

        this.setState({
          follows: [...this.state.follows, ...data.follows],
          offset: this.state.offset + this.state.limit,
          loadMoreInProgress: false
        })
      })
      .catch(e => {
        this.setState({ loadMore: false, loadMoreInProgress: false })
        console.error(e)
      })
  }

  loadMoreFollows() {
    if (!this.state.loadMoreInProgress) {
      this.setState({ loadMoreInProgress: true })
      this.fetchMoreFollows()
    }
  }

  render() {
    const { follows, noFollowsData, loadMore, loadMoreInProgress } = this.state
    return (
      <>
        {follows.length > 0 ? (
          <div className="follows_list">
            {follows.map(item => (
              <FollowItem key={item.channel._id} data={item} />
            ))}
          </div>
        ) : (
          !noFollowsData ? <Loader className="long" /> : <Error message="No follows" />
        )}
        {loadMore ? (
          <div className="foot_center">
            <div onClick={this.loadMoreFollows.bind(this)} className="load_more">
              {loadMoreInProgress ? (
                <span className="more_loader">
                  <Loader />
                </span>
              ) : <span className="more_text">Load more follows</span>}
            </div>
          </div>
        ) : null}
      </>
    )
  }
}

export default Follows;
