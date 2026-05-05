const {
    loadMemberships,
    saveMemberships
} = require("../storage/memberships.storage")

const { loadUsers } =require("../storage/users.storage")
const { loadDepartments} =require("../storage/departments.storage")

// -----------------ADD membership---------------------------
function addMembership(userId, departmentId, role, permissions) {
    const users = loadUsers()
    const departments = loadDepartments()
    const membeberships = loadMemberships()

    // comprobar que el usuario y departamento existe
    const userExists = users.some(u => u.id === userId)// some dice si existe al menos un elemento que cumpla la condicion

    if(!userExists) {
        return {
            error: "Usuario no existe"
        }
    }

    const departmentExists= departments.some(d=> d.id ===departmentId)

    if(!departmentExists) {
        return {
            error: "Departamento no existe"
        }
    }

    //Evitar duplicados de membership
    const alreadyExists =membeberships.some( (m=> m.userId === userId) && (m=> m.departmentId === departmentId))

    if(alreadyExists) {
        return {
            error: "El usuario ya es miembro de este departamento"
        }
    }

    //------------- Create relationship------------------
    const newMembership= {
        id: membeberships.length +1,
        userId,
        departmentId,
        role,
        permissions: permissions || [],
        createdAt: new Date().toISOString()
    }
    membeberships.push(newMembership)
    saveMemberships(membeberships)

    return newMembership
}

module.exports ={
    addMembership
}

