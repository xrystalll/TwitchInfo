import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { rootPath } from 'config';

const Header = () => {
  const history = useHistory()

  const [error, setError] = useState(false)

  const isError = error ? ' error' : ''

  const getUser = (e) => {
    const input = e.currentTarget.parentNode.children[0]
    if (input.value.trim().length) {
      history.push(rootPath + 'channel/' + input.value.trim().toLowerCase())
      input.value = ''
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
        input.value = ''
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
    <header>
      <div className="head_container">
        <Link to={rootPath} className="twitch_link">
          <svg className="tw-glitch-logo__svg" overflow="visible" width="40px" height="40px" version="1.1" viewBox="0 0 40 40" x="0px" y="0px">
            <polygon className="tw-glitch-logo__body" points="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8" />
            <polygon className="tw-glitch-logo__face" points="26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25" transform="translate(0 0)" />
            <path className="tw-glitch-logo__eyes" d="M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z" transform="translate(0 0)" />
          </svg>
        </Link>
        <div className="head_input_inner">
          <input
            onBlur={loseFocus}
            onChange={validateInput.bind(this)}
            onKeyDown={getUserByEnter.bind(this)}
            className={'login input_text' + isError}
            type="text"
            placeholder="Enter username"
          />
          <input onClick={getUser.bind(this)} className="btn" type="submit" value="Check" />
        </div>
      </div>
    </header>
  )
}

export default Header;
