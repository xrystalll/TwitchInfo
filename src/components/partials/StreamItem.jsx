import React, { useState } from 'react';
import { VodModal } from './VodModal';
import { timeFormat, counter, toHHMMSS } from '../support/Utils';

export const StreamItem = ({ data }) => {
  const [open, setOpen] = useState(false)

  const openModal = (url) => {
    document.addEventListener('click', handleCloseModal, false)
    document.addEventListener('keydown', handleKeyDown, false)
    setOpen(true)
  }

  const handleCloseModal = (e) => {
    const clickClass = e.target.className
    if (clickClass === 'cover' || clickClass === 'position' || e.target.classList[0] === 'close_btn') {
      document.removeEventListener('click', handleCloseModal, false)
      document.removeEventListener('keydown', handleKeyDown, false)
      setOpen(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      document.removeEventListener('click', handleCloseModal, false)
      document.removeEventListener('keydown', handleKeyDown, false)
      setOpen(false)
    }
  }

  return (
    <>
      {open && <VodModal data={data} />}

      <div className={data.live ? 'stream_item' : 'clip_item'}>
        <div onClick={openModal.bind(this, data.url)}>
          <div className="clip_thumb" style={{ 'backgroundImage': `url(${data.preview.large})` }}>
            {data.live ? (
              <div className="clip_stat">
                <span className="live">
                  <i className="live_dot"></i>
                  Live
                </span>
                <span>{counter(data.views)} viewers</span>
              </div>
            ) : (
              <div className="clip_stat">
                <span>{counter(data.views)} views</span>
                <span>{toHHMMSS(data.duration)}</span>
              </div>
            )}
          </div>
          <div className="stream_header">
            <div className="clip_header_top">
              {!!data.game > 0 && <span>{data.game}</span>}
              <span>{data.live && 'Started '}{timeFormat(data.created_at)}</span>
            </div>
            <h4 className="clip_title">{data.title}</h4>
          </div>
        </div>
      </div>
    </>
  )
}
