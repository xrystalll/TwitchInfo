import React from 'react';

export const Error = ({ message = 'Error', className }) => {
  const size = 112

  return (
    <div className={`empty-results ${className || ''}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <path className="path_info" d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      </svg>
      <div className="empty_words">
        <div className="empty_top">{message}</div>
      </div>
    </div>
  )
}
