import React, { Component } from 'react';
import { EmoteItem } from '../partials/EmoteItem';
import { Loader } from '../partials/Loader';
import { Error } from '../partials/Error';

class Emotes extends Component {
  _isMounted = false;
  constructor(props) {
    super();
    this.state = {
      userId: props.userId,
      tier1: [],
      tier2: [],
      tier3: [],
      noEmotesData: false
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.fetchEmotes()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  async fetchEmotes() {
    try {
      const data = await fetch('https://api.twitchemotes.com/api/v4/channels/' + this.state.userId)
      const res = await data.json()

      if (!this._isMounted) return

      if (!res.error && res.emotes.length > 0) {
        this.setState({
          tier1: res.emotes.filter(i => i.emoticon_set === Number(res.plans['$4.99'])),
          tier2: res.emotes.filter(i => i.emoticon_set === Number(res.plans['$9.99'])),
          tier3: res.emotes.filter(i => i.emoticon_set === Number(res.plans['$24.99']))
        })
      } else {
        this.setState({ noEmotesData: true })
      }
    } catch(e) {
      this.setState({ noEmotesData: true })
      console.error(e)
    }
  }

  render() {
    const { tier1, tier2, tier3, noEmotesData} = this.state

    return (
      tier1.length > 0 || tier2.length > 0 || tier3.length > 0 ? (
        <div className="emotes">
          {tier1.length > 0 && (
            <div className="emote_grid">
              <h4 className="tier_title">Tier 1 subscriber emotes</h4>
              {tier1.map(item => (
                <EmoteItem key={item.id} data={{ id: item.id, code: item.code }} />
              ))}
            </div>
          )}

          {tier2.length > 0 && (
            <div className="emote_grid">
              <h4 className="tier_title">Tier 2 subscriber emotes</h4>
              {tier2.map(item => (
                <EmoteItem key={item.id} data={{ id: item.id, code: item.code }} />
              ))}
            </div>
          )}

          {tier3.length > 0 && (
            <div className="emote_grid">
              <h4 className="tier_title">Tier 3 subscriber emotes</h4>
              {tier3.map(item => (
                <EmoteItem key={item.id} data={{ id: item.id, code: item.code }} />
              ))}
            </div>
          )}
          <div className="api_copy zerolr">
            <a href="https://twitchemotes.com" target="_blank" rel="noopener noreferrer">
              Data provided by Twitchemotes
            </a>
          </div>
        </div>
      ) : (
        !noEmotesData ? <Loader className="long" /> : <Error message="No emotes" />
      )
    )
  }
}

export default Emotes;
