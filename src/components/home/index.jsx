import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { rootPath } from 'config';
import { ThemeToggle } from '../partials/ThemeToggle';

const Home = () => {
  document.title = 'Get Twitch account info'
  const history = useHistory()

  const [error, setError] = useState(false)

  const isError = error ? ' error' : ''

  const getUser = (e) => {
    const input = e.currentTarget.parentNode.children[0]
    if (input.value.trim().length) {
      history.push(rootPath + 'channel/' + input.value.trim().toLowerCase())
      if (error === false) return

      setError(false)
    } else {
      setError(true)
    }
  }

  const getUserByEnter = (e) => {
    if (e.key === 'Enter') {
      const input = e.currentTarget
      if (input.value.trim().length) {
        history.push(rootPath + 'channel/' + input.value.trim().toLowerCase())
        if (error === false) return

        setError(false)
      } else {
        setError(true)
      }
    }
  }

  const validateInput = (e) => {
    const input = e.currentTarget
    if (input.value.trim().length) {
      if (error === false) return

      setError(false)
    } else {
      setError(true)
    }
  }

  const loseFocus = () => {
    if (error === true) {
      setError(false)
    }
  }

  return (
    <main className="landing">
      <div className="bg" />
      <div className="container">
        <div className="landing_content">
          <h1 className="main_head">Get Twitch Account</h1>
          <div className="main_description">
            Enter Twitch username to get information about the date of registration, last online, list of follows and more.
          </div>
          <div className="main_form">
            <input
              onBlur={loseFocus}
              onChange={validateInput.bind(this)}
              onKeyDown={getUserByEnter.bind(this)}
              className={'login_main input_text' + isError}
              type="text"
              placeholder="Enter username"
            />
            <input onClick={getUser.bind(this)} className="btn_main" type="submit" value="Check" />
          </div>
        </div>

        <ThemeToggle />
      </div>
    </main>
  )
}

export default Home;
