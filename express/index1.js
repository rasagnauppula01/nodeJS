let express=require("express")

let app=express();

let conn=require("./db.js")




app.get("/register",(req,res)=>{

    console.log(req.body);

    var sqll="CREATE TABLE coders (LastName varchar(255),FirstName varchar(255))"

    conn.query(sqll,(err,data)=>{
        // console.log(data);
        // console.log(err);
        // res.send("created database")
        res.status(200).json({
            "status":200,
            data:data
        })
    })
    
})
app.listen(3005,()=>{
    console.log("hi server on 3005 port");
})