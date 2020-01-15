module.exports = parseStringAsArray = arrayAsString => {
  return arrayAsString.split(",").map(str => str.trim());
};
