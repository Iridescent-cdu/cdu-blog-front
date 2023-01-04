export const formatDate = (date) => {
  const year = `${date.split(',').reverse().join(' ').split(' ')[1]}年`
  const month = date.split(',').reverse().join(' ').split(' ')[2]
  const day = `${date.split(',').reverse().join(' ').split(' ')[3]}日`
  return `${year} ${month}${day}`
}
