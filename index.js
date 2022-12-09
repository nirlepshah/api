const express = require('express'),
    bodyParser = require('body-parser'),
    uuid = require('uuid');
const mongoose = require('mongoose')

const Models = require('./models')

const Movies = Models.Movie
const Users = Models.User


let { movies, users } = require('./database.js');


const app = express()
app.use(bodyParser.json())// middelware to access requets body 
app.use(bodyParser.urlencoded({ extended: true }))

let url = 'mongodb://localhost:27017/myFilmDB'

//mongo db connection 
mongoose.connect(url, (err, db) => {
    if (err) {
        throw new Error
    }
    else {
        console.log("Connected");
        // db.close()
    }

})

//GET all movies 
app.get('/movies', (req, res) => {

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
app.get('/movies/:title', (req, res) => {
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

app.get('/movies/genre/:genreName', async (req, res) => {
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
app.get('/movies/director/:directorName', async (req, res) => {
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
app.get('/users', async (req, res) => {

    try {
        const user = await Users.find()

        res.status(201).json(user)
    } catch (err) {
        console.log(err);
        // res.send(err)
    }

})

// Get a user by username async
app.get('/users/:Username', async (req, res) => {
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
app.put('/users/:Username', async (req, res) => {

    try {

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
app.put('/users/:Username/movies/:MovieID', async (req, res) => {

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
app.delete('/users/:Username/movies/:MovieID', async (req, res) => {

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
app.post('/users', async (req, res) => {

    try {

        const user = await Users.findOne({ Username: req.body.Username })
        if (user) {
            return res.status(400).send(req.body.Username + ' already exists');
        }

        else {
            const user = await Users.create({
                Username: req.body.Username,
                Password: req.body.Password,
                Email: req.body.Email,
                Birthday: req.body.Birthday
            })

            res.status(500).json(user)
        }
    } catch (err) {
        console.log(err);
    }


})

//Delete user by Username
app.delete('/users/:Username', async (req, res) => {

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

app.listen(8080, () => {
    console.log("App is runing on port 8080");
})
