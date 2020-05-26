export const timeFormat = (timestamp) => {
  timestamp || (timestamp = Date.now())
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

export const counter = (count) => {
  if (!count || count === 0) return 0
  if (count < 1e3) return count
  if (count >= 1e3 && count < 1e6) return `${+(count / 1e3).toFixed(1)}K`
  if (count >= 1e6 && count < 1e9) return `${+(count / 1e6).toFixed(1)}M`
  if (count >= 1e9 && count < 1e12) return `${+(count / 1e9).toFixed(1)}B`
}

export const toHHMMSS = (sec) => {
  sec || (sec = 0)
  const secNum = parseInt(sec, 10)
  let hours = Math.floor(secNum / 3600)
  const minutes = Math.floor((secNum - (hours * 3600)) / 60)
  let seconds = secNum - (hours * 3600) - (minutes * 60)

  if (hours > 0) { hours = hours + ':' }
  if (seconds < 10) { seconds = '0' + seconds }

  return hours + minutes + ':' + seconds
}
