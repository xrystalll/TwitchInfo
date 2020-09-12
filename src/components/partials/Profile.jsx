import React from 'react';
import { timeFormat, counter } from '../support/Utils';

export const Profile = (props) => {
  const data = props.data[0]
  const extended = props.extended[0]
  const beforeBg = `.user-profile-content .user-head:before {background-image: url(${data.profile_banner || data.logo})}`
  const banned = data.banned || false

  return (
    <article className="container container-profile container-profile-main">
      <style>{beforeBg}</style>
      <div className="user-profile-content">
        <div className="user-head">
          <div className="container container-profile user-info">
            <div className="avatar animated fadeInUpBig">
              <img src={data.logo} className="img-circle" alt="" />
            </div>
            <div className="info">
              <div className="uname animated fadeInUpBig">
                <a className="display_name" href={'https://www.twitch.tv/' + data.name} target="_blank" rel="noopener noreferrer">
                  <h4 title={data.name + ' - id ' + data._id}>
                    {data.display_name}
                  </h4>
                  {data.partner && (
                    <div title="Twitch partner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 2l6 2 2 6-2 6-6 2-6-2-2-6 2-6 6-2zM8.889 13.636l5.43-5.429-1.415-1.414-4.015 4.015-2.015-2.015-1.414 1.414 3.429 3.43z" fill="#9147ff" />
                      </svg>
                    </div>
                  )}
                  {extended?.type === 'staff' && (
                    <div title="Twitch staff">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="#9147ff" />
                      </svg>
                    </div>
                  )}
                </a>
              </div>
              <ul className={`social_info${!data.views ? ' single' : ''} animated fadeInUpBig`}>
                <li>
                  <span>Followers</span>
                  <span className="social_count">{counter(data.followers)}</span>
                </li>
                <li>
                  <span>{data.views && 'Views'}</span>
                  <span className="social_count">{data.views && counter(data.views)}</span>
                </li>
              </ul>
              {data.description.length > 0 && (
                <p className={`bio${banned ? ' banned' : ''} animated fadeInUpBig`}>{data.description}</p>
              )}
            </div>
          </div>
        </div>

        <div className="include">
          <div className="container container-profile user-posts__container">
            <div className="more_info">
              <span>Last seen:</span>
              <b>{timeFormat(data.updated_at)}</b>
            </div>
            {data.created_at && (
              <div className="more_info">
                <span>Registration:</span>
                <b>{timeFormat(data.created_at)}</b>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
