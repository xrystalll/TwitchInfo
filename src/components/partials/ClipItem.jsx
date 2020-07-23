import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Clip from '../clip';
import { timeFormat, counter, toHHMMSS } from '../support/Utils';

class ClipItem extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.data,
      open: false,
      slug: ''
    }
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false)
    document.removeEventListener('keydown', this.handleKeyDown, false)
    document.removeEventListener('click', this.handleClickNext, false)
  }

  openModal(slug) {
    document.addEventListener('click', this.handleOutsideClick, false)
    document.addEventListener('keydown', this.handleKeyDown, false)
    document.addEventListener('click', this.handleClickNext, false)
    this.setState({ open: true, slug })
  }

  handleOutsideClick(e) {
    const clickClass = e.target.className
    if (clickClass === 'cover' || clickClass === 'position' || e.target.classList[0] === 'close_btn') {
      document.removeEventListener('click', this.handleOutsideClick, false)
      document.removeEventListener('keydown', this.handleKeyDown, false)
      document.removeEventListener('click', this.handleClickNext, false)
      this.setState({ open: false })
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 27) {
      document.removeEventListener('click', this.handleOutsideClick, false)
      document.removeEventListener('keydown', this.handleKeyDown, false)
      document.removeEventListener('click', this.handleClickNext, false)
      this.setState({ open: false })
    }
  }

  handleClickNext(e) {
    if (e.target.classList[0] === 'next_btn') {

      let nextClip = document.querySelector(`[data-slug="${this.state.slug}"]`).nextSibling
      if (!!nextClip && nextClip.classList[0] === 'modal') {
        nextClip = nextClip.nextSibling
      }

      const nextSlug = nextClip !== null ? nextClip.dataset.slug : null
      if (!!nextSlug) {
        this.setState({ slug: nextSlug })
        document.querySelector('.prev_clip').classList.remove('disable')
      } else {
        document.querySelector('.next_clip').classList.add('disable')
      }

    } else if (e.target.classList[0] === 'prev_btn') {

      let prevClip = document.querySelector(`[data-slug="${this.state.slug}"]`).previousSibling
      if (!!prevClip && prevClip.classList[0] === 'modal') {
        prevClip = prevClip.previousSibling
      }

      const prevSlug = prevClip !== null ? prevClip.dataset.slug : null
      if (!!prevSlug) {
        this.setState({ slug: prevSlug })
        document.querySelector('.next_clip').classList.remove('disable')
      } else {
        document.querySelector('.prev_clip').classList.add('disable')
      }

    }
  }

  render() {
    const { data, open, slug } = this.state
    const vodExist = !!data.vod

    return (
      <>
        {open ? <Clip slug={slug} clientId={this.props.clientId} /> : null}

        <div className="clip_item" data-slug={data.slug}>
          <div onClick={this.openModal.bind(this, data.slug)}>
            <div className="clip_thumb" style={{ 'backgroundImage': `url(${data.thumbnails.medium})` }}>
              <div className="clip_stat">
                <span>{counter(data.views)} views</span>
                <span>{toHHMMSS(data.duration)}</span>
              </div>
            </div>
          </div>
          <div className="clip_header">
            <div className="clip_header_top">
              {data.game.length > 0 ? <span>{data.game}</span> : null}
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
      </>
    )
  }
}

export default ClipItem;
