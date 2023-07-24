// FS MODULE 

// Interacting with the file system

// ASYNCHRONOUSLY   --:    NON-BLOCKING
// SYNCHRONOUSLY    --:    BLOCKING
 
// ====================================================================
// SYNCHRONOUS
// =============================================================

const { readFileSync, writeFileSync } = require('fs')

// The above is same as
// const fs = require('fs')
// fs.readFileSync
// fs.writeFileSync

// To read from the file system
// we need to provide two parameters to the method
// 1st is the file path to that specific file
// What is the encoding (we generally go with 'utf-8') 
// 
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// ========================================================================================

// writeFileSync

//  we provide two parameters to the method
// 1st is file name, if the file is not there (non-existent) the node will create that file
// & if there is already some content present in the file it will override it (replace all of it)
// 2nd is the value we wanna pass

// 3rd value (optional) is an options object

// the property name is flag & if we set this flag equal to 'a', then node will append the 2nd value to the file content  
// By default we are overriding everything and then when we add that flag then of course we create a new value

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    { flag: 'a'}
)