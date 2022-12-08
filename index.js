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
    // res.status(200).json(movies)
    // console.log(users);
    Movies.find((err, movies) => {
        if (err) {
            throw new Error
        }
        else {
            res.json(movies)
        }
    })
})
// app.get('/movies/:title', (req, res) => {
//     const { title } = req.params
//     const movie = movies.find((movie) => {
//         return movie.Title === title
//     })
//     if (movie) {
//         res.status(200).json(movie)

//     }
//     else {
//         res.status(400).send("No movie found")
//     }

// })
// Get movie per title 
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

// app.get('/movies/genre/:genreName', (req, res) => {
//     const { genreName } = req.params
//     const movie = movies.find((movie) => {
//         return (movie.Genre.Name === genreName)
//     })
//     if (movie) {
//         res.status(200).json(movie.Genre)
//     }
//     else {
//         res.status(400).send("Genre not found")
//     }

// })
//Get movie per genre using aysnc await
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





// app.get('/movies/director/:directorName', (req, res) => {
//     const { directorName } = req.params
//     const director = movies.find(((movie) => {
//         return (movie.Director.Name === directorName)
//     })).Director
//     if (director) {
//         res.status(200).json(director)
//     }
//     else {
//         res.status(400).send("Director Name not found")
//     }

// })

// Get movies based on director name
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
            res.status(400).send(`User with username: ${Username} not found`)
        }

    } catch (err) {
        console.log(err);
    }




})


// app.put('/users/:id', (req, res) => {
//     const { id } = req.params
//     const updatedUser = req.body
//     let user = users.find((user) => {
//         return user.id == id
//     })
//     if (user) {
//         user.name = updatedUser.name
//         res.status(200).json(user)
//     }
//     else {
//         res.status(400).send('User not found')
//     }

// })

//update user async
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
//// Add a movie to a user's list of favorites
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

// app.post('/users', (req, res) => {
//     const newUser = req.body
//     if (newUser.name) {
//         newUser.id = uuid.v4()
//         users.push(newUser)
//         res.status(201).json(newUser)
//     }
//     else {
//         res.status(400).send("User is not created")
//     }
// })
//create user using async function 
app.post('/users', async (req, res) => {

    try {
        const userName = req.body.Username
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

// app.post('/users/:id/:movieTitle', (req, res) => {
//     const { id, movieTitle } = req.params
//     let user = users.find((user) => {
//         return user.id == id
//     })
//     if (user) {
//         user.favoriteMovies.push(movieTitle)
//         res.status(200).send(`${movieTitle} has been added to the favaorite movies for the useID: ${id}`)
//     }
//     else {
//         res.status(400).send('User not found')
//     }
// })
// app.delete('/users/:id/:movieTitle', (req, res) => {
//     const { id, movieTitle } = req.params
//     let user = users.find((user) => {
//         return user.id == id
//     })
//     if (user && user.favoriteMovies.includes(`${movieTitle}`)) {
//         console.log(user.favoriteMovies);
//         user.favoriteMovies = user.favoriteMovies.filter((title) => {
//             return title !== movieTitle
//         })
//         res.status(200).send(`${movieTitle} has been deleted from the favaorite movies for the useID: ${id}`)
//     }
//     else {
//         res.status(400).send('User not found')
//     }
// })
app.delete('/users/:id', (req, res) => {
    const { id } = req.params
    let user = users.find((user) => {
        return user.id == id
    })
    if (user) {

        users = users.filter((user) => {
            return user.id != id

        })
        res.json(users)
        // res.status(200).send(`User with ID: ${id} has been deleted`)
    }
    else {
        res.status(400).send('User not found')
    }
})
app.listen(8080, () => {
    console.log("App is runing on port 8080");
})
