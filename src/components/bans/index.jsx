import React, { Component } from 'react';
import { BanItem } from '../partials/BanItem';
import { Loader } from '../partials/Loader';
import { Error } from '../partials/Error';

class Bans extends Component {
  _isMounted = false;
  constructor(props) {
    super();
    this.state = {
      login: props.login,
      bans: [],
      noBansData: false
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.fetchBans()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  async fetchBans() {
    try {
      const data = await fetch('https://api.streamerbans.com/api/v1/users/' + this.state.login)
      const res = await data.json()

      if (this._isMounted) {
        if (res?.data?.bans?.length > 0) {
          this.setState({ bans: res.data.bans })
        } else {
          this.setState({ noBansData: true })
        }
      }
    } catch(e) {
      this.setState({ noBansData: true })
      console.error(e)
    }
  }

  render() {
    const { bans, noBansData} = this.state

    return (
      bans.length > 0 ? (
        <div className="bans_grid">
          <h4 className="bans_title">Ban history</h4>
          <div className="bans_header">
            <div className="bans_grid_item">Duration</div>
            <div className="bans_grid_item">From</div>
            <div className="bans_grid_item">To</div>
          </div>
          {bans.map(item => (
            <BanItem key={item.id} data={item} />
          ))}
          <div className="api_copy">
            <a href="https://streamerbans.com" target="_blank" rel="noopener noreferrer">
              Data provided by Streamerbans
            </a>
          </div>
        </div>
      ) : (
        !noBansData ? <Loader className="long" /> : <Error message="No bans" />
      )
    )
  }
}

export default Bans;
