import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  document.title = 'Get Twitch account info'
  const history = useHistory()

  const getUser = (e) => {
    const input = e.currentTarget.parentNode.children[0]
    if (!input.value.trim().length) {
      input.classList.add('error')
    } else {
      input.classList.remove('error')
      history.push('/channel/' + input.value.toLowerCase())
    }
  }

  const getUserByEnter = (e) => {
    if (e.key === 'Enter') {
      const input = e.currentTarget
      if (!input.value.trim().length) {
        input.classList.add('error')
      } else {
        input.classList.remove('error')
        history.push('/channel/' + input.value.toLowerCase())
      }
    }
  }

  const validateInput = (e) => {
    const input = e.currentTarget
    if (!input.value.trim().length) {
      input.classList.add('error')
    } else {
      input.classList.remove('error')
    }
  }

  const loseFocus = (e) => {
    const input = e.currentTarget
    if (input.classList.contains('error')) {
      input.classList.remove('error')
    }
  }

  const changeTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'dark')
      document.body.classList.remove('light-theme')
    } else {
      localStorage.setItem('theme', 'light')
      document.body.classList.add('light-theme')
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
              onChange={validateInput.bind(this)}
              onBlur={loseFocus.bind(this)}
              onKeyDown={getUserByEnter.bind(this)}
              className="login_main input_text"
              type="text"
              placeholder="Enter username"
            />
            <input onClick={getUser.bind(this)} className="btn_main" type="submit" value="Check" />
          </div>
        </div>
        <div onClick={changeTheme} className="theme_toggle">
          <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
            <path fillRule="evenodd"  clipRule="evenodd" d="M8.614 2.134a8.001 8.001 0 001.388 15.879 8.003 8.003 0 007.884-6.635 6.947 6.947 0 01-2.884.62 7.004 7.004 0 01-6.388-9.864zM6.017 5.529a5.989 5.989 0 00-2.015 4.484c0 3.311 2.69 6 6 6a5.99 5.99 0 004.495-2.028 9.006 9.006 0 01-8.48-8.456z" />
          </svg>
          <span>Change theme</span>
        </div>
      </div>
    </main>
  )
}

export default Home;
