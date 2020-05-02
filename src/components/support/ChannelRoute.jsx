import React from 'react';
import { Route } from 'react-router-dom';
import CustomScrollbar from './CustomScrollbar';
import Header from '../partials/Header';

const ChannelRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {props =>
        <>
          <Header />

          <CustomScrollbar className="view">
            <section className="content">
              <div className="container">
                <Component {...props} />
              </div>
            </section>
          </CustomScrollbar>
        </>
      }
    />
  )
}

export default ChannelRoute;
