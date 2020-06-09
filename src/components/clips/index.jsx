import React, { Component } from 'react';
import ClipItem from '../partials/ClipItem';
import { Loader } from '../partials/Loader';
import { Error } from '../partials/Error';
import Dropdown from 'react-dropdown';

class Clips extends Component {
  _isMounted = false;
  initialPeriod = 'week'
  constructor(props) {
    super();
    this.state = {
      login: props.login,
      clientId: props.clientId,
      period: this.initialPeriod,
      clips: [],
      noClipsData: false,
      limit: 10,
      cursor: '',
      loadMore: false,
      loadMoreInProgress: false
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.getUserPeriod()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  async getUserPeriod() {
    if (!this._isMounted) return

    const period = await localStorage.getItem('period') || this.initialPeriod

    this.setState({ period })
    this.fetchClips()
  }

  async fetchClips(period = this.state.period) {
    try {
      const data = await fetch(`https://api.twitch.tv/kraken/clips/top?channel=${this.state.login}&period=${period}&limit=` + this.state.limit, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': this.state.clientId
        }
      })
      const res = await data.json()

      if (!this._isMounted) return

      if (!res.error && res.clips.length > 0) {
        this.setState({ clips: res.clips, cursor: res._cursor, loadMore: true })
        if (res._cursor === '') {
          this.setState({ loadMore: false, loadMoreInProgress: false })
        }
      } else {
        this.setState({ noClipsData: true })
      }
    } catch(e) {
      this.setState({ noClipsData: true })
      console.error(e)
    }
  }

  fetchMoreClips() {
    fetch(`https://api.twitch.tv/kraken/clips/top?channel=${this.state.login}&period=${this.state.period}&limit=${this.state.limit}&cursor=` + this.state.cursor, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': this.state.clientId
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.clips.length > 0 && this.state.cursor !== '') {
          this.setState({ clips: [...this.state.clips, ...data.clips], cursor: data._cursor, loadMoreInProgress: false })
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
    if (!this.state.loadMoreInProgress) {
      this.setState({ loadMoreInProgress: true })
      this.fetchMoreClips()
    }
  }

  changePreiod(e) {
    switch(e.value) {
      case 'day':
        this.setState({ clips: [], noClipsData: false, period: 'day', cursor: '', loadMore: false })
        this.fetchClips('day')
        localStorage.setItem('period', 'day')
        break
      case 'week':
        this.setState({ clips: [], noClipsData: false, period: 'week', cursor: '', loadMore: false })
        this.fetchClips('week')
        localStorage.setItem('period', 'week')
        break
      case 'month':
        this.setState({ clips: [], noClipsData: false, period: 'month', cursor: '', loadMore: false })
        this.fetchClips('month')
        localStorage.setItem('period', 'month')
        break
      case 'all':
        this.setState({ clips: [], noClipsData: false, period: 'all', cursor: '', loadMore: false })
        this.fetchClips('all')
        localStorage.setItem('period', 'all')
        break
      default:
        this.setState({ clips: [], noClipsData: false, period: this.initialPeriod, cursor: '', loadMore: false })
        this.fetchClips(this.initialPeriod)
        localStorage.setItem('period', this.initialPeriod)
    }
  }

  render() {
    const { clips, noClipsData, loadMore, loadMoreInProgress, period } = this.state
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
        <div className="period_toggle_wrap">
          <div className="period_toggle">
            <Dropdown options={periods} onChange={this.changePreiod.bind(this)} value={periods.find(i => i.value === period)} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">
              <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" fill="#EFEFF1" />
            </svg>
          </div>
        </div>
        {clips.length > 0 ? (
          <div className="clips_list">
            {clips.map(item => (
              <ClipItem key={item.slug} data={item} clientId={this.state.clientId} />
            ))}
          </div>
        ) : (
          !noClipsData ? <Loader className="long" /> : <Error message="No clips" />
        )}
        {loadMore ? (
          <div className="foot_center">
            <div onClick={this.loadMoreClips.bind(this)} className="load_more">
              {loadMoreInProgress ? (
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
