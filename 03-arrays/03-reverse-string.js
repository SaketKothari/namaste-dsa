const reverseString = (s) => {
  let len = s.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
};

const str = ["h", "e", "l", "l", "o"];
console.log("Input: ", [...str]);
reverseString(str);
console.log("Modified Array:", str);

// Time Complexity: O(n)
// Space Complexity: O(1)
