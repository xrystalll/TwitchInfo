import React from 'react';
import { timeFormat, counter, toHHMMSS } from '../support/Utils';

export const StreamItem = ({ data }) => {
  return (
    <div className={data.live ? 'stream_item' : 'clip_item'}>
      <a href={data.url} target="_blank" rel="noopener noreferrer">
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
      </a>
    </div>
  )
}
