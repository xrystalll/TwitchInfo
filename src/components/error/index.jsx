import React from 'react';
import { rootPath } from 'config';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  document.title = 'TwitchInfo - 404 Not Found'

  return (
    <section className="content">
      <div className="container http_error_container">
        <div className="http_error">
          <h2>404 Not Found</h2>
          <Link to={rootPath}>Go to home page</Link>
        </div>
      </div>
    </section>
  )
}
