const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Models = require('./models.js'),
    passportJWT = require('passport-jwt');


let Users = Models.User,
    JWTStrategy = passportJWT.Strategy,
    ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({ usernameField: 'Username', passwordField: 'Password' },
    (username, password, callback) => {

        console.log((username + '' + password));
        Users.findOne({ Username: username }, (error, user) => {
            if (error) {
                console.log(error);
                return callback(error)
            }
            if (!user) {
                console.log('Incorrect Username');
                return callback(null, false, { message: 'Incorrect username or password' })

            }
            if (user) {
                console.log('finished');
                return callback(null, user)
            }
        })

    }

))

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}, async (jwtPayload, callback) => {
    try {

        const user = await Users.findById(jwtPayload._id)
        if (user) {
            return callback(null, user)
        }

        if (!user) {
            return callback(null, false, { message: 'Incorrect Key' })
        }
    } catch (error) {
        return callback(error)

    }

}




))


