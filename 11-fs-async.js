// FS MODULE

// ASYNCHRONOUS METHOD

// providing callback function
// It means we run that callback when we are done

const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(result);
})

// PS C:\Code camp\John Smilga @codingaddict\Node js\Tutorial> node app.js
// Hello this is first text file 

// =============================================================================

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
    
        const second = result;

        writeFile(
            './content/result-async.txt', 
            `Here is the result : ${first}, ${second}`
        ,(err, result) => {
            if (err) {
                console.log(err)
                return
            }
        
            console.log(result)
        })
    })
})