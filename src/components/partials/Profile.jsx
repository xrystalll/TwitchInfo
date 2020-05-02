import React from 'react';
import { timeFormat } from '../support/Utils';

export const Profile = (props) => {
  const data = props.data[0]
  const beforeBg = `.user-profile-content .user-head:before {background-image: url(${data.logo})}`

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
                <a href={'https://www.twitch.tv/' + data.name} target="_blank" rel="noopener noreferrer">
                  <h4 title={data.name + ' - id ' + data._id}>
                    {data.display_name} {data.type === 'staff' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path clip-rule="evenodd" d="M0 0h24v24H0z" fill="none" />
                        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="#9147ff" />
                      </svg>
                    ) : null}
                  </h4>
                </a>
              </div>
              {data.bio !== null ? (
                <p className="bio animated fadeInUpBig">{data.bio}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="include">
          <div className="container container-profile user-posts__container">
            <div className="more_info">
              <span>Last seen: </span>
              <b>{timeFormat(data.updated_at)}</b>
            </div>
            <div className="more_info">
              <span>Registration: </span>
              <b>{timeFormat(data.created_at)}</b>
            </div>
            <div className="follows">FOLLOWED CHANNELS</div>
          </div>
        </div>
      </div>
    </article>
  )
}
