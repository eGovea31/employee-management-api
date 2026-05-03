const { loadUsers , saveUsers } = require("../storage/users.storage")

// --------ADD USER-----------
function addUser(name){
    const users = loadUsers()

    const newUser ={
        id: users.length +1,
        name,
        createdAt: new Date().toISOString()
    }
    
    users.push(newUser)
    saveUsers(users)

    return newUser
}

// -------------LIST USERS--------------
function listUsers(){
    return loadUsers()
}

module.exports= {
    addUser,
    listUsers
}

