const express = require('express'),
    bodyParser = require('body-parser'),
    uuid = require('uuid');
let { movies, users } = require('./database.js')

const app = express()
app.use(bodyParser.json())



app.get('/movies', (req, res) => {
    res.status(200).json(movies)
    console.log(users);
})
app.get('/movies/:title', (req, res) => {
    const { title } = req.params
    const movie = movies.find((movie) => {
        return movie.Title === title
    })
    if (movie) {
        res.status(200).json(movie)

    }
    else {
        res.status(400).send("No movie found")
    }

})

app.get('/movies/genre/:genreName', (req, res) => {
    const { genreName } = req.params
    const movie = movies.find((movie) => {
        return (movie.Genre.Name === genreName)
    })
    if (movie) {
        res.status(200).json(movie.Genre)
    }
    else {
        res.status(400).send("Genre not found")
    }

})
app.get('/movies/director/:directorName', (req, res) => {
    const { directorName } = req.params
    const director = movies.find(((movie) => {
        return (movie.Director.Name === directorName)
    })).Director
    if (director) {
        res.status(200).json(director)
    }
    else {
        res.status(400).send("Director Name not found")
    }

})

app.put('/users/:id', (req, res) => {
    const { id } = req.params
    const updatedUser = req.body
    let user = users.find((user) => {
        return user.id == id
    })
    if (user) {
        user.name = updatedUser.name
        res.status(200).json(user)
    }
    else {
        res.status(400).send('User not found')
    }

})
app.post('/users', (req, res) => {
    const newUser = req.body
    if (newUser.name) {
        newUser.id = uuid.v4()
        users.push(newUser)
        res.status(201).json(newUser)
    }
    else {
        res.status(400).send("User is not created")
    }
})
app.post('/users/:id/:movieTitle', (req, res) => {
    const { id, movieTitle } = req.params
    let user = users.find((user) => {
        return user.id == id
    })
    if (user) {
        user.favoriteMovies.push(movieTitle)
        res.status(200).send(`${movieTitle} has been added to the favaorite movies for the useID: ${id}`)
    }
    else {
        res.status(400).send('User not found')
    }
})
app.delete('/users/:id/:movieTitle', (req, res) => {
    const { id, movieTitle } = req.params
    let user = users.find((user) => {
        return user.id == id
    })
    if (user && user.favoriteMovies.includes(`${movieTitle}`)) {
        console.log(user.favoriteMovies);
        user.favoriteMovies = user.favoriteMovies.filter((title) => {
            return title !== movieTitle
        })
        res.status(200).send(`${movieTitle} has been deleted from the favaorite movies for the useID: ${id}`)
    }
    else {
        res.status(400).send('User not found')
    }
})
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