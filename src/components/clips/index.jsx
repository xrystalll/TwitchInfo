import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Profile } from '../partials/Profile';
import { ClipItem } from '../partials/ClipItem';
import { Loader } from '../partials/Loader';
import { Error } from '../partials/Error';
import Dropdown from 'react-dropdown';

class Clips extends Component {
  constructor() {
    super();
    this.state = {
      userId: 0,
      clientId: 'ce4n64ldb15801hbrrz06vpq5dbain',
      period: 'week',
      profile: [],
      extendedInfo: [],
      clips: [],
      noProfileData: false,
      noClipsData: false,
      limit: 10,
      cursor: '',
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
        clips: [],
        noProfileData: false,
        noClipsData: false,
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
        this.getClips()
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

  getClips(period = this.state.period) {
    fetch(`https://api.twitch.tv/kraken/clips/top?channel=${this.props.match.params.login}&period=${period}&limit=${this.state.limit}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': this.state.clientId
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.clips.length > 0) {
          this.setState({ clips: data.clips, cursor: data._cursor, loadMore: true })
        } else {
          this.setState({ noClipsData: true })
        }
      })
      .catch(e => {
        this.setState({ noClipsData: true })
        console.error(e)
      })
  }

  fetchMoreClips(cursor) {
    fetch(`https://api.twitch.tv/kraken/clips/top?channel=${this.props.match.params.login}&period=${this.state.period}&limit=${this.state.limit}&cursor=${cursor}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': this.state.clientId
      }
    })
      .then(response => response.json())
      .then(data => {
        if (this.state.cursor !== '') {
          this.setState({ clips: [...this.state.clips, ...data.clips], loadMoreInProgress: false, cursor: data._cursor })
          if (data._cursor === '') {
            this.setState({ loadMore: false, loadMoreInProgress: false })
          }
        } else {
          this.setState({ loadMore: false, loadMoreInProgress: false })
        }
      })
      .catch(e => {
        this.setState({ loadMore: false, loadMoreInProgress: false })
        console.error(e)
      })
  }

  loadMoreClips() {
    this.setState({ loadMoreInProgress: true })
    this.fetchMoreClips(this.state.cursor)
  }

  changePreiod(e) {
    switch(e.value) {
      case 'day':
        this.setState({ clips: [], period: 'day', cursor: '', loadMore: false })
        this.getClips('day')
        break
      case 'week':
        this.setState({ clips: [], period: 'week', cursor: '', loadMore: false })
        this.getClips('week')
        break
      case 'month':
        this.setState({ clips: [], period: 'month', cursor: '', loadMore: false })
        this.getClips('month')
        break
      case 'all':
        this.setState({ clips: [], period: 'all', cursor: '', loadMore: false })
        this.getClips('all')
        break
      default:
        this.setState({ clips: [], period: 'week', cursor: '', loadMore: false })
        this.getClips('week')
    }
  }

  render() {
    const { profile, extendedInfo, clips, noProfileData, noClipsData, loadMore, period } = this.state
    const periods = [{
      value: 'day', label: 'Popular - 24 hours'
    }, {
      value: 'week', label: 'Popular - 7 days'
    }, {
      value: 'month', label: 'Popular - 30 days'
    }, {
      value: 'all', label: 'Popular - all time'
    }]
    return (
      <>
        {profile.length > 0 ? (
          <div>
            <Profile data={profile} extended={extendedInfo} />
            <div className="channel_nav">
              <NavLink to={'/user/' + profile[0].name} className="nav_item">FOLLOWED CHANNELS</NavLink>
              <NavLink to={'/clips/' + profile[0].name} className="nav_item">CLIPS</NavLink>
            </div>
            <div className="period_toggle">
              <Dropdown options={periods} onChange={this.changePreiod.bind(this)} value={periods.find(i => i.value === period)} />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">
                <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" fill="#EFEFF1" />
              </svg>
            </div>
            {clips.length > 0 ? (
              <div className="clips_list">
                {clips.map(item => (
                  <ClipItem key={item.slug} data={item} />
                ))}
              </div>
            ) : (
              !noClipsData ? <Loader /> : <Error message="No clips" />
            )}
          </div>
        ) : (
          !noProfileData ? <Loader /> : <Error message="Nothing! Try another username" />
        )}
        {loadMore ? (
          <div onClick={this.loadMoreClips.bind(this)} className="foot_center">
            <div className="load_more">
              {this.state.loadMoreInProgress ? (
                <span className="more_loader">
                  <Loader />
                </span>
              ) : <span className="more_text">Load more clips</span>}
            </div>
          </div>
        ) : null}
      </>
    )
  }
}

export default Clips;
