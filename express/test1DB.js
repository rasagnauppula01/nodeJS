const dbConnection = require("./db")
const express = require("express")
const app = express()

//creating database:
// dbConnection.query("CREATE DATABASE my_db", (error, data)=>{
//     if(error){ console.log("error", error)};
//     if(data){

//         console.log("database created succefully")
//     }
// })


//creating table:
// dbConnection.query("create table my_db.user1 (name VARCHAR(255) , address VARCHAR(255))", (error, data)=>{ 
//     if(error){
//         console.log(error)
//     }
//     if(data){
//         console.log("table created")
//     }
// })



app.get("/readTable", (req, res )=>{
    dbConnection.query("insert into my_db.user1 (name, address) VALUES ('Company Inc', 'Highway 37')" , (err, data)=>{
        if(err) res.json(err)
        if(data) res.send("values are inserted into table succesfully")
    })
})


app.get("/users1", (req, res)=> {
    dbConnection.query("select * from  user1", (error, data)=>{
        if(error) res.json(error)
        if(data) res.json(data)
    })
})


app.listen(3009, ()=>{
    console.log("server started successfuly")
})