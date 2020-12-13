import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { timeFormat, counter } from '../support/Utils';

export const VodModal = ({ data }) => {
  const [error, setError] = useState(false)

  const ratioList = ['1-1', '16-9', '4-3', '3-2']
  const [ratio, setRatio] = useState(1) // ratioList value index

  const vodId = data.preview.large.split('/')[5]
  const vodUrl = 'https://twitch-cors.herokuapp.com/https://vod-secure.twitch.tv/' + vodId + '/chunked/index-dvr.m3u8'
  const frameVid = data.live ? '?channel=' + data.channel.display_name : '?video=' + data._id

  const errorHandler = (message, e) => {
    const errorCodes = [400, 401, 403, 404, 500]
    if (errorCodes.includes(e?.response?.code)) {
      setError(true)
    }
  }

  return (
    <div className="modal open">
      <div className="position">
        <div className="body" aria-modal="true">

          <div className="body_flex">
            <div className={'body_width body_ratio_' + ratioList[ratio]}>
              <div className="body_bg">

                <div className="top">
                  <div className={'view_ratio ratio_' + ratioList[ratio]}>
                    <div className="view_content">
                      {!error ? (
                        <ReactPlayer
                          className="video"
                          url={vodUrl}
                          width="100%"
                          height="100%"
                          light={data.preview.large}
                          controls
                          playing
                          onError={errorHandler}
                        />
                      ) : (
                        <iframe
                          title="TwitchPlayer"
                          className="video"
                          src={`https://player.twitch.tv/${frameVid}&parent=` + document.location.hostname}
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          scrolling="no"
                          allowFullScreen={true}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="bottom">
                  <div className="clip_info_box">
                    <div className="clip_info_box_position">
                      <div className="clip_info_box_flexbox">
                        <div className="clip_info">
                          <div className="clip_info_position">
                            <div className="action_bar">

                              <div className="author_box">
                                <div className="avatar_box">
                                  <div className="author_avatar" style={{ 'backgroundImage': `url(${data.channel.logo})` }} />
                                </div>

                                <div className="author_text">
                                  <div className="author_name">{data.channel.display_name}</div>
                                  <div className="created_time">{data.game}</div>
                                </div>
                              </div>

                            </div>

                            <div className="clip_info_content">
                              {data.live ? (
                                <div className="clip_info_views live">
                                  <i className="live_dot"></i>
                                  Live
                                  <span>{counter(data.views)} viewers</span>
                                </div>
                              ) : (
                                <span className="clip_info_views" title={data.views + ' views'}>
                                  <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                                    <path d="M11.998 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path fillRule="evenodd"  clipRule="evenodd" d="M16.175 7.567L18 10l-1.825 2.433a9.992 9.992 0 01-2.855 2.575l-.232.14a6 6 0 01-6.175 0 35.993 35.993 0 00-.233-.14 9.992 9.992 0 01-2.855-2.575L2 10l1.825-2.433A9.992 9.992 0 016.68 4.992l.233-.14a6 6 0 016.175 0l.232.14a9.992 9.992 0 012.855 2.575zm-1.6 3.666a7.99 7.99 0 01-2.28 2.058l-.24.144a4 4 0 01-4.11 0 38.552 38.552 0 00-.239-.144 7.994 7.994 0 01-2.28-2.058L4.5 10l.925-1.233a7.992 7.992 0 012.28-2.058 37.9 37.9 0 00.24-.144 4 4 0 014.11 0l.239.144a7.996 7.996 0 012.28 2.058L15.5 10l-.925 1.233z" />
                                  </svg>
                                  {counter(data.views)} views
                                </span>
                              )}

                              <h4 className="clip_title">{data.title}</h4>
                              <div className="clip_info_created">
                                <div className="clip_info_time">{timeFormat(data.created_at)}</div>
                              </div>
                            </div>

                            <div className="clip_bottom">
                              <a className="btn clip_full" href={data.url} target="_blank" rel="noopener noreferrer">Watch on Twitch</a>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <button className="clip_actions close_btn modal_btn close_clip" title="Press Esc key to close" style={{ height: 'initial' }}>
            <svg className="close_btn clip_action_ic" width="20" height="20" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
              <path className="close_btn" d="M8.5 10L4 5.5 5.5 4 10 8.5 14.5 4 16 5.5 11.5 10l4.5 4.5-1.5 1.5-4.5-4.5L5.5 16 4 14.5 8.5 10z" />
            </svg>
          </button>

        </div>
      </div>
      <div className="cover" />
    </div>
  )
}
