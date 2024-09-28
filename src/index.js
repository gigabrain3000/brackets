module.exports = function check(str, bracketsConfig) {
  let result = true;
  let stack = [];
  for (let i = 0 ; i < str.length; i++) {
    bracketsConfig.forEach(element => {
      if (element[0] === str[i] && !stack.includes(element[1])) {
        stack.push(str[i]);
      } else if (element[1] === str[i] && stack.length > 0 && element.includes(stack[stack.length - 1])) {
        stack.pop();
      } else if (element[1] === str[i] && stack.length === 0) {
        console.log(str[i]);
        return result = false;
      }
    });
  }
  return stack.length === 0 && result ? true : false;
}