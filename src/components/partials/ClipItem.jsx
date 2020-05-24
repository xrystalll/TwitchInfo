import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ClipModal } from './ClipModal';
import { timeFormat, counter, toHHMMSS } from '../support/Utils';

class ClipItem extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.data,
      open: false
    }
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.handleEscape = this.handleEscape.bind(this)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false)
    document.removeEventListener('keydown', this.handleEscape, false)
  }

  openModal() {
    document.addEventListener('click', this.handleOutsideClick, false)
    document.addEventListener('keydown', this.handleEscape, false)
    this.setState({ open: true })
  }

  handleOutsideClick(e) {
    if (e.target.className === 'cover' || e.target.className === 'position') {
      document.removeEventListener('click', this.handleOutsideClick, false)
      document.removeEventListener('keydown', this.handleEscape, false)
      this.setState({ open: false })
    }
  }

  handleEscape(e) {
    if (e.keyCode === 27) {
      document.removeEventListener('click', this.handleOutsideClick, false)
      document.removeEventListener('keydown', this.handleEscape, false)
      this.setState({ open: false })
    }
  }

  render() {
    const { data, open } = this.state
    const vodExist = !!data.vod

    return (
      <>
        <div className="clip_item">
          <div onClick={this.openModal.bind(this)}>
            <div className="clip_thumb" style={{ 'backgroundImage': `url(${data.thumbnails.medium})` }}>
              <div className="clip_stat">
                <span>{counter(data.views)} views</span>
                <span>{toHHMMSS(data.duration)}</span>
              </div>
            </div>
          </div>
          <div className="clip_header">
            <div className="clip_header_top">
              <span>{data.game}</span>
              <span>{timeFormat(data.created_at)}</span>
            </div>
            {!!data.curator ? (
              <div className="clip_author">
                Clipped by
                <Link to={'/channel/' + data.curator.name}>{data.curator.display_name}</Link>
              </div>
            ) : null}
            <h4 className="clip_title">{data.title}</h4>
          </div>
          <div className="clip_bottom">
            {vodExist ? (
              <a className="btn clip_full" href={data.vod.url} target="_blank" rel="noopener noreferrer">Watch full video</a>
            ) : null}
            <a
              className={`btn clip_download${vodExist ? ' short' : ''}`}
              href={data.thumbnails.tiny.replace('-preview-86x45.jpg', '.mp4')}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              {!vodExist ? <span>Download clip</span> : null}
            </a>
          </div>
        </div>

        {open ? <ClipModal data={data} /> : null}
      </>
    )
  }
}


export default ClipItem;
