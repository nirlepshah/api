const express = require('express')
const morgan = require('morgan')
const app = express()
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const accessStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), { flags: "a" })

let myLogger = (req, res, next) => {
    console.log(req.url);
    next();
}

let requestTime = (req, res, next) => {
    req.requestTime = new Date().toString()
    console.log(`Requested at: ${req.requestTime}`);
    next()


}

// app.use(myLogger);
// app.use(requestTime)

app.use(morgan('combined', { stream: accessStream }))

app.use('/static', express.static('public')) //middleware to serve the static files 

let topBooks = [
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling'
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien'
    },
    {
        title: 'Twilight',
        author: 'Stephanie Meyer'
    }
];


app.get('/', (req, res) => {
    res.send("Welcome to my HomePage")

})
// app.get("/documentation", (req, res) => {
//     res.sendFile(__dirname + '/documentation.html', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {

//         }

//     })
// })

app.get('/books', (req, res) => {
    res.json(topBooks)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('something broke')
})

app.listen(8080, () => {
    console.log("Server is running on the port 8080");
})