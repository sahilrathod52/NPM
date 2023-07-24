// HTTP MODULE

const http = require('http')

// Create server looks for a callback function
// It takes two parameters and both of those parameters are 'objects'
// req = request -> represents the incoming request, from the web and it will have information about the methods and all kind of useful stuff
// res = response -> what we are sending back

// const server = http.createServer((req, res) => {
//     console.log(req)     // This will give us a giant object regarding information about the request rtyuiop[i8j]
//     res.write('Welcome to our home page')
//     res.end()
// })

// // We also need to specify what port our server will be listening to 
// server.listen(5000)
// ===================================================================================================

const server = http.createServer((req, res) => {
    // '/' is used for homepage
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }

   if (req.url === '/about') {
    res.end('Here is our short history')
   }
   
   // If the user asks for a request page (like contact page) that we dont have, we will set a default response      
   res.end(`
   <h1>Oops</h1>
   <p>We can't seem to find the page you are looking for</p>
   <a href="/">back home</a> 
   `)
})

server.listen(5000)