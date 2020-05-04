import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChannelRoute from 'components/support/ChannelRoute';
import Home from 'components/home';
import Channel from 'components/channel';
import Clips from 'components/clips';
import { NotFound } from 'components/error';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <ChannelRoute path="/user/:login" component={Channel} />
          <ChannelRoute path="/clips/:login" component={Clips} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App;
