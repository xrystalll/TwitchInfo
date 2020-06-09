import React, { Component } from 'react';
import { ClipModal } from '../partials/ClipModal';

class Clip extends Component {
  _isMounted = false;
  constructor(props) {
    super();
    this.state = {
      clip: [],
      clientId: props.clientId,
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.fetchClip()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      this.fetchClip()
    }
  }

  async fetchClip() {
    try {
      const data = await fetch('https://api.twitch.tv/kraken/clips/' + this.props.slug, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': this.state.clientId
        }
      })
      const res = await data.json()

      if (!this._isMounted) return

      if (!!res && !res.error) {
        this.setState({ clip: [res] })
      } else {
        console.error('No clip data')
      }
    } catch(e) {
      console.error(e)
    }
  }

  render() {
    const { clip } = this.state

    return (
      clip.length > 0 && <ClipModal data={clip[0]} />
    )
  }
}

export default Clip;
