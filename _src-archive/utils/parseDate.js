export const parseDate = (dateString) => {
  const d = new Date(dateString)
  const offset = d.getTimezoneOffset()
  d.setHours(d.getHours()+offset/60)
  return {
    year: d.getFullYear(),
    month: d.getMonth(),
    date: d.getDate()
  }
}