import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  document.title = 'Get Twitch account info'
  const history = useHistory()

  const getUser = (e) => {
    const input = e.currentTarget.parentNode.children[0]
    if (!input.value.length) {
      input.classList.add('error')
    } else {
      input.classList.remove('error')
      history.push('/user/' + input.value)
    }
  }

  const getUserByEnter = (e) => {
    if (e.key === 'Enter') {
      const input = e.currentTarget
      if (!input.value.length) {
        input.classList.add('error')
      } else {
        input.classList.remove('error')
        history.push('/user/' + input.value)
      }
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
            <input onKeyDown={getUserByEnter.bind(this)} className="login_main input_text" type="text" placeholder="Enter username" />
            <input onClick={getUser.bind(this)} className="btn_main" type="submit" value="Check" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;
