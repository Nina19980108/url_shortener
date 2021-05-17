function padLeft(str, lenght) {
  if (str.length >= lenght)
    return str
  else
    return padLeft("0" + str, lenght)
}

function randomURL(times) {
  const num = padLeft(String(times % 10000), 4)
  const i = Math.floor(times / 10000)
  const char = String.fromCharCode(i + 65)
  return char + num
}

module.exports = randomURL
