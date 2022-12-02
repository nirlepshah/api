// const x = 2


// const sampleFunction = () => {
//     console.log("hello this is a sample fucntion");
// }

// module.exports = { x, sampleFunction }

const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

    let addr = req.url
    let q = url.parse(addr, true)
    let filepath = ""

    fs.appendFile('./log.txt', `URL: ${addr} \nTimestamp: ${new Date()}\n\n`, (err) => {
        if (err) throw err;
        console.log('Added to log file');
    });

    if (q.pathname.includes('documentation')) {
        filepath = `${__dirname} '/documentation.html`;
    } else {
        filepath = 'index.html';
    }

    fs.readFile(filepath, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
    });

}).listen(8080)




console.log('my server is running on port 8080');