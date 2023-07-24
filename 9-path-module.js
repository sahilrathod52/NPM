// PATH Module

const path = require('path');

// ==========================================================================

// PATH.SEP

// A seperator property that returns a platform specific seperator
console.log(path.sep)

// ===============================================================================

// PATH.JOIN

// A property that joins a sequence of path segments using that platform specific seperator
// It returns a normalize resulting path

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

// PS C:\Code camp\John Smilga @codingaddict\Node js\Tutorial> node app.js
// \
// PS C:\Code camp\John Smilga @codingaddict\Node js\Tutorial> node app.js
// \
// \content\subfolder\test.txt

// Even if we add a wrong syntax (trailing slashes '/'), they will be removed, it will return the normalized path
// const filePath = path.join('/content/', 'subfolder', 'test.txt')
// console.log(filePath)

// PS C:\Code camp\John Smilga @codingaddict\Node js\Tutorial> node app.js
// \
// \content\subfolder\test.txt

// ========================================================================================

// PATH.BASE 

// If we want only the last portion of the file directory ('/content/', 'subfolder', 'test.txt') (last portion = 'test.txt')
// To access it we use the method base name

const base = path.basename(filePath)
console.log(base)

// PS C:\Code camp\John Smilga @codingaddict\Node js\Tutorial> node app.js
// \
// \content\subfolder\test.txt
// test.txt

// ===============================================================================================

// PATH.RESULT

// To provide absolute path
// It accepts a sequencs of path or path segments and resolves it in an absolute path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

// C:\Code camp\John Smilga @codingaddict\Node js\Tutorial\content\subfolder\test.txt