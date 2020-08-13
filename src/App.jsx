import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { rootPath } from 'config';
import ChannelRoute from 'components/support/ChannelRoute';
import Home from 'components/home';
import Channel from 'components/channel';
import { NotFound } from 'components/error';

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-theme')
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path={rootPath} exact component={Home} />
          <ChannelRoute path={rootPath + 'channel/:login'} component={Channel} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App;
