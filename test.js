// const os = require('os')
// console.log(`type: ${os.type()}`);
// const { x, sampleFunction } = require('./index.js')
// import { x, sampleFunction } from './index.js'
// const fs = require('fs')
// fs.readFile('./test1.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// console.log(x);
// sampleFunction()


// const http = require('http')

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end("hello Node!")
// }).listen(8080)
// console.log('my server is running on port 8080');

// const url = require('url')
// let addr = 'https://www.yelp.com/biz/mavis-discount-tire-edison-3?year=2017&month=february'
// let q = url.parse(addr, true)
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// let qdata = q.query
// console.log(qdata);
// console.log(parseInt(qdata.year));

// const fs = require('fs')




// console.log("Going to write into existing file");
// fs.writeFile('./test1.txt', "hello this is new data to be added again", function (err) {
//     if (err) {
//         return console.error(err)
//     }
//     console.log("Data writtern successfully");
//     fs.readFile('./test1.txt', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log(`Asyncronus reading of the data ${data.toString()}`);
//     })

// })
// fs.appendFile('./test1.txt', "\n Data will be added", (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
// });

// const path = require("path")
// console.log(__filename);
// debugger
// const path1 = path.resolve("users/admin", "name")
// console.log(path1);