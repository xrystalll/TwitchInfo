import React from 'react';

export const ThemeToggle = ({ className }) => {

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
    <div onClick={changeTheme} className={`theme_toggle ${className || ''}`}>
      <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.614 2.134a8.001 8.001 0 001.388 15.879 8.003 8.003 0 007.884-6.635 6.947 6.947 0 01-2.884.62 7.004 7.004 0 01-6.388-9.864zM6.017 5.529a5.989 5.989 0 00-2.015 4.484c0 3.311 2.69 6 6 6a5.99 5.99 0 004.495-2.028 9.006 9.006 0 01-8.48-8.456z" />
      </svg>
      <span>Change theme</span>
    </div>
  )
}
