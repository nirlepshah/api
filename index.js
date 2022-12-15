const express = require('express'),
    bodyParser = require('body-parser'),
    uuid = require('uuid');
const mongoose = require('mongoose')
const cors = require('cors');
const bcrypt = require('bcrypt')

const Models = require('./models')
const ejs = require('ejs')
const passport = require('passport');
require('./passport')
const saltRounds = 10;
const { check, validationResult } = require('express-validator')

let Movies = Models.Movie
let Users = Models.User


let { movies, users } = require('./database.js');

const port = process.env.PORT || 8000;
const app = express()


var allowedOrigins = ['http://localhost:8080',
    'http://yourapp.com'];
app.use(cors({
    origin: function (origin, callback) {

        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));



app.set('view engine', 'ejs')
app.use(express.json())
app.use(bodyParser.json())// middelware to access requets body 
app.use(bodyParser.urlencoded({ extended: true }))// middleware to access the content of the req.body
app.use(express.static('public'))




let url = 'mongodb://localhost:27017/myFilmDB'




//mongo db connection 
mongoose.connect(url,

    (err, db) => {
        if (err) {
            throw new Error
        }
        else {
            console.log("Connected");
            // db.close()
        }

    })


let auth = require('./auth')(app)
require('./passport')

app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Film API')
})
//GET all movies 
app.get('/movies', passport.authenticate('jwt', { session: false }), (req, res) => {

    Movies.find((err, movies) => {
        if (err) {
            throw new Error
        }
        else {
            res.json(movies)

        }
    })
})

// Get movie by title 
app.get('/movies/:title', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { title } = req.params
    Movies.findOne({
        Title: `${title}`
    }, function (err, movie) {
        if (err) {
            console.log(err);
        }
        else if (movie) {
            res.status(200).json(movie)
        }
        else {
            res.status(400).send("No movie found")
        }
    })


})

// Get movie by genreName

app.get('/movies/genre/:genreName', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { genreName } = req.params
        const movie = await Movies.findOne({
            'Genre.Name': `${genreName}`
        })

        if (movie) {
            res.status(200).json(movie)
        }
        else {
            res.status(400).send(`No movie with the genre ${genreName} found`)
        }
    }
    catch (err) {
        console.log(err);
    }
})
//Get Movie by director name
app.get('/movies/director/:directorName', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { directorName } = req.params

        const movie = await Movies.findOne({ 'Director.Name': `${directorName}` })
        if (movie) {
            res.status(200).json(movie)

        }
        else {
            res.status(400).send(`No movie with the director ${directorName} found`)
        }
    }
    catch (err) {
        console.log(err);
    }

})
//Get all users aync 
app.get('/users', passport.authenticate('jwt', { session: false }), async (req, res) => {

    try {
        const user = await Users.find()

        res.status(201).json(user)
    } catch (err) {
        console.log(err);
        // res.send(err)
    }

})

// Get a user by username async
app.get('/users/:Username', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {

        const user = await Users.findOne({ Username: req.params.Username })
        if (user) {
            res.status(200).json(user)
        }
        else {
            res.status(400).send(`User with username: ${req.params.Username} not found`)
        }

    } catch (err) {
        console.log(err);
    }

})

//Update userdata async
app.put('/users/:Username', [
    check('Username', 'Username is required').isLength({ min: 5 }),
    check('Username', 'Username contains non alphanumeric characters - not allowed.').isAlphanumeric(),
    check('Password', 'Password is required').not().isEmpty(),
    check('Email', 'Email does not appear to be valid').isEmail()
], passport.authenticate('jwt', { session: false }), async (req, res) => {

    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const user = await Users.findOneAndUpdate({ Username: req.params.Username }, {
            $set:
            {
                Username: req.body.Username,
                Password: req.body.Password,
                Email: req.body.Email,
                Birthday: req.body.Birthday
            }
        }
            , { new: true })

        if (user) {
            // console.log(user);
            res.status(200).json(user)
        }
        else {
            res.status(400).send(`User not found `)
        }
    } catch (err) {
        console.log(err);
    }




})

// Add a movie to a user's list of favorites
app.put('/users/:Username/movies/:MovieID', passport.authenticate('jwt', { session: false }), async (req, res) => {

    try {

        const user = await Users.findOneAndUpdate({ Username: req.params.Username }, {
            $push:
            {
                FavoriteMovies: req.params.MovieID
            }
        }
            , { new: true })

        if (user) {
            // console.log(user);
            res.status(200).json(user)
        }
        else {
            res.status(400).send(`User not found `)
        }
    } catch (err) {
        console.log(err);
    }




})

// Allow user to remove the favorite movie
app.delete('/users/:Username/movies/:MovieID', passport.authenticate('jwt', { session: false }), async (req, res) => {

    try {

        const user = await Users.findOneAndUpdate({ Username: req.params.Username }, {
            $pull:
            {
                FavoriteMovies: req.params.MovieID
            }
        }
            , { new: true })

        if (user) {
            // console.log(user);
            res.status(200).json(user)
        }
        else {
            res.status(400).send(`User not found `)
        }
    } catch (err) {
        console.log(err);
    }




})

//Create user Async
app.post('/users', [check('Username', 'Username is required').isLength({ min: 5 }),
check('Username', 'Username contains non alphanumeric characters').isAlphanumeric(),
check('Password', 'Password required').not().isEmpty(),
check('Email', 'Email does not appear to be valid').isEmail()
], async (req, res) => {

    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }
        let hashedPassword = Users.hashPassword(req.body.Password);
        const user = await Users.findOne({ Username: req.body.Username })
        if (user) {
            return res.status(400).send(req.body.Username + ' already exists');
        }

        else {
            const user = await Users.create({
                Username: req.body.Username,
                Password: hashedPassword,
                Email: req.body.Email,
                Birthday: req.body.Birthday
            })

            res.status(500).json(user)
        }
    } catch (err) {
        console.log(err);
    }


})

// app.post('/users', (req, res) => {
//     let hashedPassword = Users.hashPassword(req.body.Password);
//     Users.findOne({ Username: req.body.Username }) // Search to see if a user with the requested username already exists
//         .then((user) => {
//             if (user) {
//                 //If the user is found, send a response that it already exists
//                 return res.status(400).send(req.body.Username + ' already exists');
//             } else {
//                 Users
//                     .create({
//                         Username: req.body.Username,
//                         Password: hashedPassword,
//                         Email: req.body.Email,
//                         Birthday: req.body.Birthday
//                     })
//                     .then((user) => { res.status(201).json(user) })
//                     .catch((error) => {
//                         console.error(error);
//                         res.status(500).send('Error: ' + error);
//                     });
//             }
//         })
//         .catch((error) => {
//             console.error(error);
//             res.status(500).send('Error: ' + error);
//         });
// });

//Delete user by Username

app.delete('/users/:Username', passport.authenticate('jwt', { session: false }), async (req, res) => {

    try {
        const user = await Users.findOneAndRemove({ Username: req.params.Username })

        if (user) {
            res.status(200).send(`Username ${req.params.Username} is removed `)
        } else {
            res.status(400).send(`Username ${req.params.Username} not found `)

        }
    } catch (err) {
        console.log(err);
    }

})



app.listen(port, '0.0.0.0', () => {
    console.log('Listening on Port ' + port);
});
