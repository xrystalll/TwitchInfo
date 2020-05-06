import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Profile } from '../partials/Profile';
import { StreamItem } from '../partials/StreamItem';
import { FollowItem } from '../partials/FollowItem';
import { Loader } from '../partials/Loader';
import { Error } from '../partials/Error';

class Channel extends Component {
  constructor() {
    super();
    this.state = {
      userId: 0,
      clientId: 'ce4n64ldb15801hbrrz06vpq5dbain',
      profile: [],
      extendedInfo: [],
      follows: [],
      stream: [],
      live: false,
      noProfileData: false,
      noFollowsData: false,
      limit: 10,
      offset: 0,
      loadMore: false,
      loadMoreInProgress: false
    }
  }

  componentDidMount() {
    document.title = 'Get Twitch account info'
    this.fetchProfile()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.login !== this.props.match.params.login) {
      this.setState({
        profile: [],
        extendedInfo: [],
        follows: [],
        stream: [],
        live: false,
        noProfileData: false,
        noFollowsData: false,
        offset: 0,
        loadMore: false,
        loadMoreInProgress: false
      })
      this.fetchProfile()
    }
  }

  async fetchProfile(login = this.props.match.params.login) {
    try {
      const data = await fetch('https://api.twitch.tv/kraken/users?login=' + login, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': this.state.clientId
        }
      })
      const profile = await data.json()

      if (profile.users.length > 0) {
        this.setState({ extendedInfo: [profile.users[0]], userId: profile.users[0]._id })
        this.getChannel(profile.users[0]._id)
        this.getStream()
        this.getFollows()
      } else {
        this.setState({ noProfileData: true })
      }
    } catch(e) {
      this.setState({ noProfileData: true })
      console.error(e)
    }
  }

  getChannel(id = this.state.userId) {
    fetch('https://api.twitch.tv/kraken/channels/' + id, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': this.state.clientId
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ profile: [data] })
      })
      .catch(e => {
        this.setState({ noProfileData: true })
        console.error(e)
      })
  }

  getFollows() {
    fetch(`https://api.twitch.tv/kraken/users/${this.state.userId}/follows/channels?limit=${this.state.limit}&offset=${this.state.offset}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': this.state.clientId
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.follows.length > 0) {
          this.setState({ follows: data.follows, loadMore: true })
        } else {
          this.setState({ noFollowsData: true })
        }
      })
      .catch(e => {
        this.setState({ noFollowsData: true })
        console.error(e)
      })
  }

  fetchMoreFollows(userId, offset) {
    fetch(`https://api.twitch.tv/kraken/users/${this.state.userId}/follows/channels?limit=${this.state.limit}&offset=${offset}`, {
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

        this.setState({ follows: [...this.state.follows, ...data.follows], loadMoreInProgress: false })
      })
      .catch(e => console.error(e))
  }

  loadMoreFollows() {
    this.setState({ offset: this.state.offset + this.state.limit, loadMoreInProgress: true })
    this.fetchMoreFollows(this.state.userId, this.state.offset + this.state.limit)
  }

  getStream() {
    fetch('https://api.twitch.tv/kraken/streams/' + this.state.userId, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': this.state.clientId
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.stream !== null) {
          this.setState({ stream: data.stream, live: true })
        } else {
          this.setState({ live: false })
        }
      })
      .catch(e => {
        this.setState({ live: false })
        console.error(e)
      })
  }

  changeUser(login, e) {
    this.setState({
      profile: [],
      extendedInfo: [],
      follows: [],
      stream: [],
      live: false,
      noProfileData: false,
      noFollowsData: false,
      offset: 0,
      loadMore: false,
      loadMoreInProgress: false
    })
    this.fetchProfile(login)
  }

  render() {
    const { profile, extendedInfo, follows, stream, live, noProfileData, noFollowsData, loadMore } = this.state
    return (
      <>
        {profile.length > 0 ? (
          <div>
            <Profile data={profile} extended={extendedInfo} />
            {live ? (
              <div className="stream_container">
                <div className="live_title">Live stream</div>
                <StreamItem data={stream} />
              </div>
            ) : null}
            <div className="channel_nav">
              <NavLink to={'/user/' + profile[0].name} className="nav_item">FOLLOWED CHANNELS</NavLink>
              <NavLink to={'/clips/' + profile[0].name} className="nav_item">CLIPS</NavLink>
            </div>
            {follows.length > 0 ? (
              <div className="follows_list">
                {follows.map(item => (
                  <div key={item.channel._id} onClick={this.changeUser.bind(this, item.channel.name)}>
                    <FollowItem data={item} />
                  </div>
                ))}
              </div>
            ) : (
              !noFollowsData ? <Loader /> : <Error message="No follows" />
            )}
          </div>
        ) : (
          !noProfileData ? <Loader /> : <Error message="Nothing! Try another username" />
        )}
        {loadMore ? (
          <div onClick={this.loadMoreFollows.bind(this)} className="foot_center">
            <div className="load_more">
              {this.state.loadMoreInProgress ? (
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

export default Channel;
