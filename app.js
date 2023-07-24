// npm  -  global command, comes with node
// npm --version   OR   npm --v

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
//  -- & inside there a very important property is the dependency one, in there we are going to store the dependencies which our project is using  
// manual approach (create package.json in the root, create properties, etc)

// automate approach
// npm init (step by step, press enter to skip)
// npm init -y (everything default)  faster way to do it!!

// package name is going to be by default the folder name
// If we want to publish the package we need to give it a unique name

// the package is going to be stored as a dependency

// lodash -- utility library
// PS C:\Code camp\John Smilga @codingaddict\Node js\Tutorial> npm i lodash
// "dependencies": {
//     "lodash": "^4.17.21"
//  }

// to access the lodash module

const lodash = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = lodash.flattenDeep(items)    // Lodash has the property "flattenDeep" and we have access to it cause we have installed the dependency  
console.log(newItems)

// PS C:\Code camp\John Smilga @codingaddict\Node js\Tutorial> node app.js  
[ 1, 2, 3, 4 ] 