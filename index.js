//Controller

const express = require("express")
const app = express()
const PORT= 3003

app.use(express.json())


//****************** USERS ******************
const { addUser, listUsers }=require("./services/users")


// --------------------GET /users Listar empleados------------------
app.get("/users", (req,res) => {
    const users= listUsers()

    res.json(users)
})

// --------------------POST /users Agregar empleado------------------
app.post("/users", (req,res)=> {
    const { name }= req.body

    if(!name) {
        return res.status(400).json({
            error: "Nombre requerido"
        })
    }
    const user = addUser(name)
    res.status(201).json(user)
})

// ------------------- SERVER ------------------
app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto", PORT)
})


//*********************DEPARTMENTS******************
const {addDepartment, listDepartments} = require("./services/departments")

//-------------------GET /departments Listar departamentos------------------
app.get("/departments",(req,res) => {
    res.json(listDepartments())
})

//-------------------POST /departments Agregar departamento------------------
app.post("./departments", (req,res) => {
    const{ name }=req.body

    if(!name){
        return res.status(400).json({
            error: "Nombre del departamento requerido"
        })

        const department = addDepartment(name)
        
        res.status(201).json(department)
    }
})