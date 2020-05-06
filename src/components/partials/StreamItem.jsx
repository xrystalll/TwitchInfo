import React from 'react';
import { timeFormat, counter } from '../support/Utils';

export const StreamItem = (props) => {
  const data = props.data

  return (
    <div className="stream_item">
      <a href={data.channel.url} target="_blank" rel="noopener noreferrer">
        <div className="clip_thumb" style={{ 'backgroundImage': `url(${data.preview.large})` }}>
          <div className="clip_stat">
            <span className="live">
              <i className="live_dot"></i>
              Live
            </span>
            <span>{counter(data.viewers)} viewers</span>
          </div>
        </div>
        <div className="clip_header">
          <div className="clip_header_top">
            <span>{data.game}</span>
            <span>Started {timeFormat(data.created_at)}</span>
          </div>
          <h4 className="clip_title">{data.channel.status}</h4>
        </div>
      </a>
    </div>
  )
}
