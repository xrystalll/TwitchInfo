import React, { Component } from 'react';
import { StreamItem } from '../partials/StreamItem';
import { Loader } from '../partials/Loader';
import { Error } from '../partials/Error';
import Dropdown from 'react-dropdown';

class Videos extends Component {
  _isMounted = false;
  initialType = 'archive'
  constructor(props) {
    super();
    this.state = {
      userId: props.userId,
      clientId: props.clientId,
      type: this.initialType,
      videos: [],
      noVideosData: false,
      limit: 10,
      offset: 0,
      loadMore: false,
      loadMoreInProgress: false
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.fetchVideos()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  async fetchVideos(type = this.state.type) {
    try {
      const data = await fetch(`https://api.twitch.tv/kraken/channels/${this.state.userId}/videos?broadcast_type=${type}&limit=` + this.state.limit, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': this.state.clientId
        }
      })
      const res = await data.json()

      if (!this._isMounted) return

      if (!res.error && res.videos.length > 0) {
        this.setState({
          videos: res.videos,
          offset: this.state.offset + this.state.limit,
          loadMore: true
        })
      } else {
        this.setState({ noVideosData: true })
      }
    } catch(e) {
      this.setState({ noVideosData: true })
      console.error(e)
    }
  }

  fetchMoreVideos() {
    fetch(`https://api.twitch.tv/kraken/channels/${this.state.userId}/videos?broadcast_type=${this.state.type}&limit=${this.state.limit}&offset=` + this.state.offset, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': this.state.clientId
      }
    })
      .then(response => response.json())
      .then(data => {
        if (!data.videos.length) {
          this.setState({ loadMore: false, loadMoreInProgress: false })
          return
        }

        this.setState({
          videos: [...this.state.videos, ...data.videos],
          offset: this.state.offset + this.state.limit,
          loadMoreInProgress: false
        })
      })
      .catch(e => {
        this.setState({ loadMore: false, loadMoreInProgress: false })
        console.error(e)
      })
  }

  loadMoreVideos() {
    if (!this.state.loadMoreInProgress) {
      this.setState({ loadMoreInProgress: true })
      this.fetchMoreVideos()
    }
  }

  changeType(e) {
    switch(e.value) {
      case 'archive':
        this.setState({ videos: [], noVideosData: false, type: 'archive', offset: 0, loadMore: false })
        this.fetchVideos('archive')
        break
      case 'highlight':
        this.setState({ videos: [], noVideosData: false, type: 'highlight', offset: 0, loadMore: false })
        this.fetchVideos('highlight')
        break
      case 'upload':
        this.setState({ videos: [], noVideosData: false, type: 'upload', offset: 0, loadMore: false })
        this.fetchVideos('upload')
        break
      default:
        this.setState({ videos: [], noVideosData: false, type: this.initialType, offset: 0, loadMore: false })
        this.fetchVideos(this.initialType)
    }
  }

  render() {
    const { videos, noVideosData, loadMore, loadMoreInProgress, type } = this.state
    const types = [{
      value: 'archive', label: 'Past broadcasts'
    }, {
      value: 'highlight', label: 'Highlights'
    }, {
      value: 'upload', label: 'Uploads'
    }]

    return (
      <>
        <div className="period_toggle_wrap">
          <div className="period_toggle">
            <Dropdown options={types} onChange={this.changeType.bind(this)} value={types.find(i => i.value === type)} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">
              <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
            </svg>
          </div>
        </div>
        {videos.length > 0 ? (
          <div className="clips_list">
            {videos.map(item => (
              <StreamItem key={item._id} data={{
                live: false,
                url: item.url,
                preview: {
                  large: item.preview.large,
                  medium: item.preview.medium,
                  small: item.preview.small
                },
                views: item.views,
                game: item.game,
                created_at: item.created_at,
                title: item.title,
                duration: item.length
              }} />
            ))}
          </div>
        ) : (
          !noVideosData ? <Loader className="long" /> : <Error message="No videos" />
        )}
        {loadMore && (
          <div className="foot_center">
            <div onClick={this.loadMoreVideos.bind(this)} className="load_more">
              {loadMoreInProgress ? (
                <span className="more_loader">
                  <Loader />
                </span>
              ) : <span className="more_text">Load more videos</span>}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Videos;
