import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Follows from '../follows';
import Clips from '../clips';
import Emotes from '../emotes';
import Bans from '../bans';

export const Navigation = ({ data }) => {
  return (
    <>
      <div className="channel_nav nav_sticky">
        <NavLink to={'/channel/' + data.login} exact className="nav_item">Followed</NavLink>
        <NavLink to={'/channel/' + data.login + '/clips'} className="nav_item">Clips</NavLink>
        <NavLink to={'/channel/' + data.login + '/emotes'} className="nav_item">Emotes</NavLink>
        <NavLink to={'/channel/' + data.login + '/bans'} className="nav_item">Bans</NavLink>
      </div>

      <Switch>
        <Route
          path="/channel/:login" exact
          component={(props) => <Follows userId={data.userId} clientId={data.clientId} />}
        />
        <Route
          path="/channel/:login/clips"
          component={(props) => <Clips login={data.login} clientId={data.clientId} />}
        />
        <Route
          path="/channel/:login/emotes"
          component={(props) => <Emotes userId={data.userId} />}
        />
        <Route
          path="/channel/:login/bans"
          component={(props) => <Bans login={data.login} />}
        />
      </Switch>
    </>
  )
}
