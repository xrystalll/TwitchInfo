import React from 'react';

export const EmoteItem = ({ data }) => {
  return (
    <div className="emote_item">
      <div className="emote_img" style={{ 'backgroundImage': `url(https://static-cdn.jtvnw.net/emoticons/v1/${data.id}/3.0)` }} />
      <div className="emote_name">{data.code}</div>
    </div>
  )
}
