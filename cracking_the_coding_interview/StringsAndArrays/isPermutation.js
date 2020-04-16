const isPermitation = (str1, str2) => {
  // Eliminate Whitespace
  if (str1.length !== str2.length) {
    return false;
  }

  const look_up = [];

  for (let i in str1) {
    if (!look_up[str1.charCodeAt(i)]) look_up[str1.charCodeAt(i)] = 1;
    else look_up[str1.charCodeAt(i)]++;
  }

  for (let i in str2) {
    look_up[str2.charCodeAt(i)]--;
    if (look_up[str2.charCodeAt(i)] < 0) {
      return false;
    }
  }

  return true;
};

console.log(isPermitation("god", "dog"));
