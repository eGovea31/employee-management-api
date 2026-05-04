const fs = require("fs")
const { json } = require("stream/consumers")

const FILE ="data/departments.json"

function loadDepartments(){
    try{
        const data = fs.readFileSync(File,"utf-8")
        return JSON.parse(data)    
    } catch(error) {
        return []
    }
}

function saveDepartments(departments){
    fs.writeFileSync(File,JSON.stringify(departments,null,2))
}

module.exports = {
    loadDepartments,
    saveDepartments
}