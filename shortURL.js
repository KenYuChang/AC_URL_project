const BASE_62_CHAR =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const MAX_INDEX = 61;
const MIN_INDEX = 0;

function generateShortURL(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(
      Math.random() * (MAX_INDEX - MIN_INDEX + 1) + MIN_INDEX
    );
    result += BASE_62_CHAR[randomIndex];
  }
  return result;
}

module.exports = generateShortURL;
