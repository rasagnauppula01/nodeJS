// let express=require("express");

// var port =3008;

// let app=express();

// let fs=require("fs")

// //middleware
// app.use(express.json());

// var register=[]

// app.get("/",(req,res)=>{
//     console.log(req.body);
//     res.send("hello1");
// })

// app.post("/",(req,res)=>{
//     // var register=[]
//     register.push(req.body)

//     fs.writeFile("express/index.json",JSON.stringify(register,(err)=>{
//         res.json("stored successfully");
//     }))

//     // res.json(register);
// })
// app.listen(port,()=>{
//     console.log(`hi ${port} is listening`);
// })




let express = require("express");
let fs = require("fs");

let app = express();
let port = 3008;

// Middleware for parsing JSON requests
app.use(express.json());

let register = [];

app.get("/users", (req, res) => {

    fs.readFile("express/index.json",(err,data)=>{
        // res.json("stored success")
    
        console.log(req.query);

        // console.log();
        res.status(500).json(JSON.parse(data));
    })
});

app.post("/", (req, res) => {
    register.push(req.body);

    // Write register to file
    fs.writeFile("express/index.json", JSON.stringify(register), (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Error storing data" });
        } else {
            res.json("Stored successfully");
        }
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
