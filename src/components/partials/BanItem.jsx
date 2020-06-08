import React from 'react';
import { timeFormat, convertMiliseconds, declOfNum } from '../support/Utils';

export const BanItem = ({ data }) => {
  const duration = convertMiliseconds(new Date(data.updated_at) - new Date(data.created_at), 'd')
  const durationHours = convertMiliseconds(new Date(data.updated_at) - new Date(data.created_at), 'h')

  return (
    <div className="ban_row">
      <div>
        {duration > 0 ? (
          duration + ' ' + declOfNum(duration, ['day', 'days', 'days'])
        ) : (
          durationHours + ' ' + declOfNum(durationHours, ['hour', 'hours', 'hours'])
        )}
      </div>
      <div>{timeFormat(data.created_at)}</div>
      <div>{timeFormat(data.updated_at)}</div>
    </div>
  )
}
