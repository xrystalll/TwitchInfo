import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Follows from '../follows';
import Clips from '../clips';
import Emotes from '../emotes';

export const Navigation = ({ data }) => {
  return (
    <>
      <div className="channel_nav">
        <NavLink to={'/channel/' + data.login} exact className="nav_item">FOLLOWED CHANNELS</NavLink>
        <NavLink to={'/channel/' + data.login + '/clips'} className="nav_item">CLIPS</NavLink>
        <NavLink to={'/channel/' + data.login + '/emotes'} className="nav_item">EMOTES</NavLink>
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
      </Switch>
    </>
  )
}
