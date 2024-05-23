let sql=require("mysql");

let con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"rasagna123",
    port:"3306",
    // database:"student"
    database:"my_db"

});

con.connect((error)=>{
    if(error){ console.log(error)}
    console.log("hi sql has been connected");
})


module.exports=con;