import React from 'react';
import { Link } from 'react-router-dom';
import { timeFormat } from '../support/Utils';

export const FollowItem = (props) => {
  const data = props.data.channel

  return (
    <Link to={'/channel/' + data.name} className="follow_item">
      <div className="follow_item_left">
        <div className="follow_img" style={{ 'backgroundImage': `url(${data.logo})` }} />
      </div>

      <div className="follow_item_right">
        <div className="follow_name">
          {data.display_name}
          {data.partner ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 2l6 2 2 6-2 6-6 2-6-2-2-6 2-6 6-2zM8.889 13.636l5.43-5.429-1.415-1.414-4.015 4.015-2.015-2.015-1.414 1.414 3.429 3.43z" fill="#9147ff" />
            </svg>
          ) : null}
        </div>
        <div className="follow_date">
          Followed from {timeFormat(props.data.created_at)}
          {props.data.notifications ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
              <path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
              <path d="M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z" />
            </svg>
          )}
        </div>
        <div className="follow_tags">
          {data.game ? <span className="follow_tag">{data.game}</span> : null}
          {data.language ? <span className="follow_tag">{data.language}</span> : null}
        </div>
      </div>
    </Link>
  )
}
