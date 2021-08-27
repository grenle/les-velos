// plaintext is 123
const password = '$2b$10$ub8yRxwGvHhlvIErmJe7.OhQ7YyBrNe6cB/UQCfJYzGKLdN2QBhnS'
const phone = '+1234567890'
const email = 'g@g.com'

const users = [
    { id: '0', email, password, phone, name: 'panpan', },
    { id: '1', email, password, phone, name: 'Hiyam',  },
    { id: '2', email, password, phone, name: 'Tetsuo', },
    { id: '3', email, password, phone, name: 'Shoma',  },
    { id: '4', email, password, phone, name: 'Sakura',  },
]

// inr is 2 (low end normal) > 4.5 (high end pathology)

const checkups = [
    { userId: '4',  timestamp: '2020-01-01  03:14:00', data: {inr: 2} },
    { userId: '4',  timestamp: '2020-02-01  04:14:00', data: {inr: 2} },
    { userId: '4',  timestamp: '2020-03-01  03:14:00', data: {inr: 2} },
    { userId: '4',  timestamp: '2020-04-01  01:14:00', data: {inr: 2} },
    { userId: '4',  timestamp: '2020-05-01  09:14:00', data: {inr: 2} },
    { userId: '4',  timestamp: '2020-06-01  07:14:00', data: {inr: 2} },
    { userId: '4',  timestamp: '2020-07-01  03:14:00', data: {inr: 2} },
]

function getUserByEmail(email){
    const maybeUser = users.find(u => u.email === email)
    return maybeUser || null
}

function getUserById(id){
    const maybeUser = users.find(u => u.id == id)
    return maybeUser || null
}

function saveUser(user){
    const id = users.length
    const dbUser = { id, ...user}
    users.push(dbUser)
    return dbUser
}

function getFilesByUserId(id){
    console.log(id)
    return checkups.filter(c => c.userId == id)
}

module.exports = {
    saveUser,
    getUserByEmail,
    getUserById,
    getFilesByUserId,
}