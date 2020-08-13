import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { rootPath } from 'config';
import Videos from '../videos';
import Follows from '../follows';
import Clips from '../clips';
import Emotes from '../emotes';
import Bans from '../bans';

export const Navigation = ({ data }) => {
  return (
    <>
      <div className="channel_nav nav_sticky">
        <NavLink to={rootPath + 'channel/' + data.login} exact className="nav_item">Videos</NavLink>
        <NavLink to={rootPath + 'channel/' + data.login + '/followed'} className="nav_item">Followed</NavLink>
        <NavLink to={rootPath + 'channel/' + data.login + '/clips'} className="nav_item">Clips</NavLink>
        <NavLink to={rootPath + 'channel/' + data.login + '/emotes'} className="nav_item">Emotes</NavLink>
        <NavLink to={rootPath + 'channel/' + data.login + '/bans'} className="nav_item">Bans</NavLink>
      </div>

      <Switch>
        <Route
          path={rootPath + 'channel/:login'} exact
          component={(props) => <Videos userId={data.userId} />}
        />
        <Route
          path={rootPath + 'channel/:login/followed'}
          component={(props) => <Follows userId={data.userId} />}
        />
        <Route
          path={rootPath + 'channel/:login/clips'}
          component={(props) => <Clips login={data.login} />}
        />
        <Route
          path={rootPath + 'channel/:login/emotes'}
          component={(props) => <Emotes userId={data.userId} />}
        />
        <Route
          path={rootPath + 'channel/:login/bans'}
          component={(props) => <Bans login={data.login} />}
        />
      </Switch>
    </>
  )
}
