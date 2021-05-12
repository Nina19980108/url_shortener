const char = 'abcdefghijklmnopqrstuvwxyz'
const Char = char.toUpperCase()
const num = '1234567890'
let str = char + Char + num
let arr = str.split('')

function randomURL() {
  const num0 = randomNum(arr)
  const num1 = randomNum(arr)
  const num2 = randomNum(arr)
  const num3 = randomNum(arr)
  const num4 = randomNum(arr)
  return arr[num0] + arr[num1] + arr[num2] + arr[num3] + arr[num4]
}

function randomNum(arr) {
  return Math.floor(Math.random() * arr.length)
}

module.exports = randomURL
