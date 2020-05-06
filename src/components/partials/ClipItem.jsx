import React from 'react';
import { timeFormat, counter, toHHMMSS } from '../support/Utils';

export const ClipItem = (props) => {
  const data = props.data

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
      <a className="clip_header" href={data.url} target="_blank" rel="noopener noreferrer">
        <div className="clip_header_top">
          <span>{data.game}</span>
          <span>{timeFormat(data.created_at)}</span>
        </div>
        {!!data.curator.display_name ? <span className="clip_author">Clipped by {data.curator.display_name}</span> : null}
        <h4 className="clip_title">{data.title}</h4>
      </a>
      {!!data.vod ? (
        <div className="clip_bottom">
          <a className="btn clip_full" href={data.vod.url} target="_blank" rel="noopener noreferrer">Watch full video</a>
        </div>
      ) : null}
    </div>
  )
}
