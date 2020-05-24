import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = ({ login }) => {
  return (
    <div className="channel_nav">
      <NavLink to={'/channel/' + login} exact className="nav_item">FOLLOWED CHANNELS</NavLink>
      <NavLink to={'/channel/' + login + '/clips'} className="nav_item">CLIPS</NavLink>
      <NavLink to={'/channel/' + login + '/emotes'} className="nav_item">EMOTES</NavLink>
    </div>
  )
}
