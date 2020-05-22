// O(n) with space o(c)
const isUniqueLookUp = (string) => {
  const look_up = [];
  for (let i = 0; i < string.length; i++) {
    if (look_up[string.charCodeAt(i)]) {
      return false;
    } else {
      look_up[string.charCodeAt(i)] = true;
    }
  }
  return true;
};

console.log(isUniqueLookUp("qwertyuioep"));

// one variable and O(n)

// or O(n^2)
// or O(n log n) -> sorting
