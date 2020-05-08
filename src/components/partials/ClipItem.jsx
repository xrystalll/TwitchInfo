import React from 'react';
import { Link } from 'react-router-dom';
import { timeFormat, counter, toHHMMSS } from '../support/Utils';

export const ClipItem = (props) => {
  const data = props.data
  const vodExist = !!data.vod

  return (
    <div className="clip_item">
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <div className="clip_thumb" style={{ 'backgroundImage': `url(${data.thumbnails.medium})` }}>
          <div className="clip_stat">
            <span>{counter(data.views)} views</span>
            <span>{toHHMMSS(data.duration)}</span>
          </div>
        </div>
      </a>
      <div className="clip_header">
        <div className="clip_header_top">
          <span>{data.game}</span>
          <span>{timeFormat(data.created_at)}</span>
        </div>
        {!!data.curator ? (
          <div className="clip_author">
            Clipped by
            <Link to={'/user/' + data.curator.name}>{data.curator.display_name}</Link>
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
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="#efeff1" />
            </svg>
            {!vodExist ? <span>Download clip</span> : null}
          </a>
        </div>
    </div>
  )
}
