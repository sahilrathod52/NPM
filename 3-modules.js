//  MODULES

// CommonJS, every file in node is module (by default)
// Modules = Encapsulated code (only share minimum)

// To use the values exported from names, we assign them to a variable, we have to pass in thew file name from which we are sharing the content
// Always start the file name with a '.' and then '/'

const name = require('./4-names');
// console.log(name)

const sayHi = require('./5-util');

sayHi("Marlo")
sayHi(name.rose)
sayHi(name.hulk)

const data = require('./6-alternative-flavor')
// console.log(data)

// Note :
// When we import a module, we actually invoke it 

require('./7-mind-grenade')
// Here we do not assign this file to any variable 
// If we have a function inside of the module that we invoke, 
// that code will run, 
// even though we did not assign it to a variable 
// & we didn't invoke the variable