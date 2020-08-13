import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CustomScrollbar from './CustomScrollbar';
import Header from '../partials/Header';
import { ThemeToggle } from '../partials/ThemeToggle';

class ChannelRoute extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      document.querySelector('.view').scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  render() {
    const { component: Component, ...rest } = this.props

    return (
      <Route
        {...rest}
        render = {props => (
          <>
            <Header />

            <CustomScrollbar className="view">
              <section className="content">
                <div className="container">
                  <Component {...props} />
                  <ThemeToggle className="themed" />
                </div>
              </section>
            </CustomScrollbar>
          </>
        )}
      />
    )
  }
}

export default ChannelRoute;
