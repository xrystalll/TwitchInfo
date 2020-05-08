import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = (props) => {
  return (
    <div className="channel_nav">
      <NavLink to={'/user/' + props.login} className="nav_item">FOLLOWED CHANNELS</NavLink>
      <NavLink to={'/clips/' + props.login} className="nav_item">CLIPS</NavLink>
    </div>
  )
}
