import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Follows from '../follows';
import Clips from '../clips';
import Emotes from '../emotes';
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
      clientId: 'ce4n64ldb15801hbrrz06vpq5dbain',
      profile: [],
      extendedInfo: [],
      stream: [],
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
    if (prevProps.match.params.login !== this.props.match.params.login) {
      this.setState(this.initialState)
      this.fetchProfile()
    }
  }

  async fetchProfile() {
    try {
      const data = await fetch('https://api.twitch.tv/kraken/users?login=' + this.props.match.params.login, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': this.state.clientId
        }
      })
      const profile = await data.json()

      if (!profile.error && profile.users.length > 0) {
        this.setState({ extendedInfo: [profile.users[0]], userId: Number(profile.users[0]._id) })
        this.getChannel()
        this.getStream()
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
        if (!data.error && data.stream !== null) {
          this.setState({ stream: data.stream, live: true })
        } else {
          if (this.state.live === false) return

          this.setState({ live: false })
        }
      })
      .catch(e => {
        this.setState({ live: false })
        console.error(e)
      })
  }

  render() {
    const { profile, extendedInfo, stream, live, noProfileData } = this.state

    return (
      profile.length > 0 ? (
        <div>
          <Profile data={profile} extended={extendedInfo} />
          {live ? <StreamItem data={stream} /> : null}
          <Navigation login={profile[0].name} />
          <Switch>
            <Route
              path="/channel/:login" exact
              component={(props) => <Follows userId={profile[0]._id} clientId={this.state.clientId} />}
            />
            <Route
              path="/channel/:login/clips"
              component={(props) => <Clips login={profile[0].name} clientId={this.state.clientId} />}
            />
            <Route
              path="/channel/:login/emotes"
              component={(props) => <Emotes userId={profile[0]._id} />}
            />
          </Switch>
        </div>
      ) : (
        !noProfileData ? <Loader className="full" size="32" /> : <Error message="Nothing! Try another username" />
      )
    )
  }
}

export default Channel;
