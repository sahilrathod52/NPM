// OS Module 

// To set up the os module
const os = require('os')

// Info  about current user 
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds (For how much time the system has been running)
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),    // Total memory
    freeMem: os.freemem(),      // Free memory
}

console.log(currentOs)