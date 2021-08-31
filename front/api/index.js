const api_host = 'http://localhost:8000'

const ip = '10.0.2.2'

async function login(credentials){
    try{
        const res = await fetch(`http://${ip}:8000/auth`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(credentials)
        })
        const json = await res.json()
        return json
    }
    catch(e){
        return { success: false, payload: 'api error' }
    }
}

async function register(details){
    try{
        const res = await fetch(`http:/${ip}:8000/user`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        })
        const json = await res.json()
        return json
    }
    catch(e){
        return { success: false, payload: 'api error' }
    }
}

async function getUserHistory(token){
    return [
        { userId: '4',  timestamp: '2020-01-01  03:14:00', data: {inr: 3.0} },
        { userId: '4',  timestamp: '2020-02-01  04:14:00', data: {inr: 3.0} },
        { userId: '4',  timestamp: '2020-03-01  03:14:00', data: {inr: 3.5} },
        { userId: '4',  timestamp: '2020-04-01  01:14:00', data: {inr: 3.0} },
        { userId: '4',  timestamp: '2020-05-01  09:14:00', data: {inr: 3.0} },
        { userId: '4',  timestamp: '2020-06-01  07:14:00', data: {inr: 3.0} },
        { userId: '4',  timestamp: '2020-07-01  03:14:00', data: {inr: 3.0} },
    ]
}

export {
    login,
    register,
    getUserHistory,
}
