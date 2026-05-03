const fs = require("fs")

const FILE= "data/users.json"


function loadUsers() {
    try {
        const data = fs.readFileSync(FILE, "utf-8");
        const parsed = JSON.parse(data);

        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed;
    } catch (error) {
        return [];
    }
}
function saveUsers(users){
    fs.writeFileSync(FILE,JSON.stringify(users,null,2))
}

module.exports={
    loadUsers,
    saveUsers
}