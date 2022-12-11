const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy
const Users = require('./models').User

const initializingPassport = (passport) => {

    passport.use(new LocalStrategy({ usernameField: 'Username', passwordField: 'Password' }, async (username, password, done) => {
        try {
            const user = await Users.findOne({ Username: username })

            if (!user) return done(null, false)

            if (user.password !== password) return done(null, false)

            return done(null, user)
        } catch (err) {
            return done(err, false)
        }
    }))
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser(async () => {
        try {
            const user = await Users.findById(id);
            done(null, user)

        } catch (err) {
            done(err, false)
        }
    })
}


module.exports = initializingPassport