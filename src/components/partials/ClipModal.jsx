import React from 'react';
import { Link } from 'react-router-dom';
import { timeFormat, counter } from '../support/Utils';

export const ClipModal = ({ data }) => {
  const vodExist = !!data.vod

  return (
    <div className="modal open">
      <div className="position">
        <div className="body">
          <div className="body_flex">
            <div className="body_width body_ratio_16-9">
              <div className="body_bg">

                <div className="top">
                  <div className="view_ratio ratio_16-9">
                    <div className="view_content">
                      <video
                        className="video"
                        src={data.thumbnails.tiny.replace('-preview-86x45.jpg', '.mp4')}
                        controls
                      />
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
                                  <div className="author_avatar">
                                    <img src={data.broadcaster.logo} alt="" />
                                  </div>
                                </div>

                                <div className="author_text">
                                  <div className="author_name">{data.broadcaster.display_name}</div>
                                  <div className="created_time">{data.game}</div>
                                </div>
                              </div>

                            </div>

                            <div className="clip_info_content">
                              <span className="clip_info_views" title={data.views + ' views'}>
                                <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                                  <path d="M11.998 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                  <path fillRule="evenodd"  clipRule="evenodd" d="M16.175 7.567L18 10l-1.825 2.433a9.992 9.992 0 01-2.855 2.575l-.232.14a6 6 0 01-6.175 0 35.993 35.993 0 00-.233-.14 9.992 9.992 0 01-2.855-2.575L2 10l1.825-2.433A9.992 9.992 0 016.68 4.992l.233-.14a6 6 0 016.175 0l.232.14a9.992 9.992 0 012.855 2.575zm-1.6 3.666a7.99 7.99 0 01-2.28 2.058l-.24.144a4 4 0 01-4.11 0 38.552 38.552 0 00-.239-.144 7.994 7.994 0 01-2.28-2.058L4.5 10l.925-1.233a7.992 7.992 0 012.28-2.058 37.9 37.9 0 00.24-.144 4 4 0 014.11 0l.239.144a7.996 7.996 0 012.28 2.058L15.5 10l-.925 1.233z" />
                                </svg>
                                {counter(data.views)} views
                              </span>

                              <h4 className="clip_title">{data.title}</h4>
                              <div className="clip_info_created">
                                <div className="clip_info_time">{timeFormat(data.created_at)}</div>
                                {!!data.curator ? (
                                  <div className="clip_info_author">
                                    Clipped by
                                    <Link to={'/channel/' + data.curator.name}>{data.curator.display_name}</Link>
                                  </div>
                                ) : null}
                              </div>
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
      <div className="cover"></div>
    </div>
  )
}
