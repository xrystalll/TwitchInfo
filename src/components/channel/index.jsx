import React, { Component } from 'react';
import { clientId } from 'config';
import { Profile } from '../partials/Profile';
import { StreamItem } from '../partials/StreamItem';
import { Navigation } from '../partials/Navigation';
import { Loader } from '../partials/Loader';
import { Error } from '../partials/Error';

class Channel extends Component {
  constructor() {
    super();
    this.initialState = {
      userId: 0,
      profile: [],
      extendedInfo: [],
      stream: {},
      live: false,
      noProfileData: false
    }
    this.state = this.initialState
  }

  componentDidMount() {
    document.title = 'Get Twitch account info'
    this.fetchProfile()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.login.toLowerCase() !== this.props.match.params.login.toLowerCase()) {
      this.setState(this.initialState)
      this.fetchProfile()
    }
  }

  async fetchProfile() {
    try {
      const data = await fetch('https://api.twitch.tv/kraken/users?login=' + this.props.match.params.login.toLowerCase(), {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': clientId
        }
      })
      const profile = await data.json()

      if (!profile.error && profile.users.length > 0) {
        this.setState({ extendedInfo: [profile.users[0]], userId: Number(profile.users[0]._id) })
        this.getChannel()
        this.getStream()
      } else {
        this.getIfNotExist()
      }
    } catch(e) {
      this.setState({ noProfileData: true })
      console.error(e)
    }
  }

  getChannel() {
    fetch('https://api.twitch.tv/kraken/channels/' + this.state.userId, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': clientId
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

  getStream() {
    fetch('https://api.twitch.tv/kraken/streams/' + this.state.userId, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': clientId
      }
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error && data.stream !== null) {
          this.setState({
            stream: {
              live: true,
              url: data.stream.channel.url,
              preview: {
                large: data.stream.preview.large,
                medium: data.stream.preview.medium,
                small: data.stream.preview.small
              },
              views: data.stream.viewers,
              game: data.stream.game,
              created_at: data.stream.created_at,
              title: data.stream.channel.status,
              duration: 0,
              channel: {
                logo: data.stream.channel.logo,
                display_name: data.stream.channel.display_name
              }
            },
            live: true
          })
        } else {
          if (this.state.live === false) return

          this.setState({ live: false })
        }
      })
      .catch(e => {
        console.error(e)
        if (this.state.live === false) return

        this.setState({ live: false })
      })
  }

  getIfNotExist() {
    fetch('https://staging.streamerbans.com/api/twitch/compatibility/user/' + this.props.match.params.login.toLowerCase())
      .then(response => response.json())
      .then(data => {
        const res = data.data
        this.setState({
          profile: [{
            _id: res.channel_id,
            name: res.login_name,
            display_name: res.display_name,
            logo: res.profile_image_url,
            partner: res.is_partner,
            followers: res.followers,
            views: null,
            description: res.is_banned ? 'Channel is banned!' : '',
            updated_at: res.updated_at,
            created_at: null,
            banned: res.is_banned
          }]
        })
      })
      .catch(e => {
        this.setState({ noProfileData: true })
        console.error(e)
      })
  }

  render() {
    const { profile, extendedInfo, stream, live, noProfileData } = this.state

    return (
      profile.length > 0 ? (
        <React.Fragment>
          <Profile data={profile} extended={extendedInfo} />
          {live && (
            <div className="stream_container stream">
              <div className="live_title">Live stream</div>
              <StreamItem data={stream} />
            </div>
          )}
          <Navigation data={{
            userId: profile[0]._id,
            login: profile[0].name
          }} />
        </React.Fragment>
      ) : (
        !noProfileData ? <Loader className="full" size="32" /> : <Error message="Nothing! Try another username" className="full" />
      )
    )
  }
}

export default Channel;
