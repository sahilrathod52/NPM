// GLOBALS    - NO WINDOW  !!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module(file)
// process    - info about environment where the program is being executed


console.log(__dirname)
console.log(__filename)
console.log(require)
console.log(module)
console.log(process)

setInterval(() => {
    console.log(`Merry Christmas !!`)
}, 1000)

// To stop printing press "ctrl + c"

// We can only type node app (not .js) and it will still run it in node