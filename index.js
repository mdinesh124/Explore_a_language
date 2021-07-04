const fs = require('fs');
const marvel = require('marvel-characters');
console.log("Hello World");
//random character
console.log(marvel())
/**I have copied the contents from one.txt file to two.txt file */
fs.copyFileSync('one.txt', 'two.txt');