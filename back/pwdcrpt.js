const bcrypt = require('bcrypt')

const {
    BCRYPT_ROUNDS
} = process.env

bcrypt.hash('123', Number(BCRYPT_ROUNDS))
.then(console.log)