import React from 'react';
import { timeFormat, convertMiliseconds, declOfNum } from '../support/Utils';

export const BanItem = ({ data }) => {
  const ended_at = data.ended_at || Date.now()
  const duration = convertMiliseconds(new Date(ended_at) - new Date(data.created_at), 'd')
  const durationHours = convertMiliseconds(new Date(ended_at) - new Date(data.created_at), 'h')

  return (
    <div className="ban_row">
      <div>
        {duration > 0
          ? duration + ' ' + declOfNum(duration, ['day', 'days', 'days'])
          : durationHours + ' ' + declOfNum(durationHours, ['hour', 'hours', 'hours'])
        }
      </div>
      <div>{timeFormat(data.created_at)}</div>
      <div>{data.ended_at ? timeFormat(ended_at) : 'Still banned'}</div>
    </div>
  )
}
