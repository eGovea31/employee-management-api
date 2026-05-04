const { 
    loadDepartments,
    saveDepartments
}= require("/storage/departments.storage")

// ------------------ADD DEPARTMENT------------------
function addDepartment(name){
    const departments = loadDepartments()
    const newDepartment = {
        id: departments.length +1,
        name,
        createdAt: new Date().toISOString()
    }
    departments.push(newDepartment)
    saveDepartments(departments)

    return newDepartment // ????????????
}

// ------------------LIST DEPARTMENTS------------------
function listDepartments(){
    return loadDepartments()
}

module.exports = {
    addDepartment,
    listDepartments
}