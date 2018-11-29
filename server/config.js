module.exports = {
    port: process.env.port || 8081,
    db: {
        MongoURI: process.env.MONGO_URI || 'mongodb://localhost/node-superhero'
    },
    authentication: {
        jwtSecret: process.env.jwtSecret || 'secret'
    },
    mail: {
        service: 'gmail',
        auth_user: '*',
        auth_pass: '*'
    }
}