export const timeFormat = (timestamp = Date.now()) => {
  const time = new Date(timestamp).getTime()
  const d = new Date()
  const t = new Date(time)

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const curYear = d.getFullYear()
  const curMonth = months[d.getMonth()]
  const curDate = d.getDate()

  const year = t.getFullYear()
  const month = months[t.getMonth()]
  const date = t.getDate()
  const hour = t.getHours()
  const min = t.getMinutes() < 10 ? `0${t.getMinutes()}` : t.getMinutes()

  let thisYear
  year !== curYear ? thisYear = ` ${year}` : thisYear = ''

  if (`${date}.${month}.${year}` === `${curDate}.${curMonth}.${curYear}`) {
    return `today at ${hour}:${min}`
  } else if (`${date}.${month}.${year}` === `${curDate - 1}.${curMonth}.${curYear}`) {
    return `yesterday at ${hour}:${min}`
  } else {
    return `${date} ${month}${thisYear} at ${hour}:${min}`
  }
}

export const counter = (count = 0) => {
  if (count < 1e3) return count
  if (count >= 1e3 && count < 1e6) return `${+(count / 1e3).toFixed(1)}K`
  if (count >= 1e6 && count < 1e9) return `${+(count / 1e6).toFixed(1)}M`
  if (count >= 1e9 && count < 1e12) return `${+(count / 1e9).toFixed(1)}B`
}

export const toHHMMSS = (sec = 0) => {
  const secNum = parseInt(sec, 10)
  let hours = Math.floor(secNum / 3600)
  const minutes = Math.floor((secNum - (hours * 3600)) / 60)
  let seconds = secNum - (hours * 3600) - (minutes * 60)

  if (hours > 0) { hours = hours + ':' }
  if (seconds < 10) { seconds = '0' + seconds }

  return hours + minutes + ':' + seconds
}

export const convertMiliseconds = (miliseconds = Date.now(), format) => {
  const total_seconds = parseInt(Math.round(miliseconds / 1000))
  const total_minutes = parseInt(Math.round(total_seconds / 60))
  const total_hours = parseInt(Math.round(total_minutes / 60))

  const days = parseInt(Math.round(total_hours / 24))
  const seconds = parseInt(total_seconds % 60)
  const minutes = parseInt(total_minutes % 60)
  const hours = parseInt(total_hours % 24)

  switch (format) {
    case 's':
      return total_seconds
    case 'm':
      return total_minutes
    case 'h':
      return total_hours
    case 'd':
      return days
    default:
      return { d: days, h: hours, m: minutes, s: seconds }
  }
}

export const declOfNum = (number = 0, titles = ['', '', '']) => {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}
