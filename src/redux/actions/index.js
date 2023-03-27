export const COUNT = 'COUNT'

export const counter = (count) => {
  return {
    type: COUNT,
    count,
  }
}
