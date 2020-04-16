const urlify = (string) => {
  let url = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) === 32) {
      url += "%20";
    } else url += string[i];
  }
  return url;
};

console.log(urlify("K Harshith "));
