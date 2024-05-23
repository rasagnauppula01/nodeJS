//require:
// var a=require("./index")
// console.log(a);

// console.log(a.a());





const { log } = require("console");
var a=require("http");
var b=require("url");
var c=require("fs");

// console.log(a);


a.createServer((req,res)=>{

    let bb=b.parse(req.url,true);
    console.log(req.url);
    console.log(req.query)
    console.log(bb);
    if(bb.pathname=="/register" && req.method=="POST"){


        var body="";
        req.on("data",(chunk)=>{
            body+=chunk.toString();
        })
        req.on("end",()=>{
            console.log(body);
            

            c.writeFile("index.txt",body,(err)=>{
                console.log(err);
    
                res.write("hello");
                res.end();
            })
        })

        

        // c.rename("./index.txt","index123.txt",(err,data)=>{

        //     if(err){
        //         res.write(err)
        //         res.end();  
        //     }
        //     else{
        //         res.write("file is updated")
        //         res.end();
        //     }
        // })
        
        
        // res.write("hello 10k team")
        // res.end();
    // console.log(req.url);
    
    
//    res.write("hello world");
    //res.write(JSON.stringify({"hi":"hello"}));
    

    }else if(bb.pathname=="/register" && req.method=="GET"){
        //console.log(req.url);
        
        res.write(JSON.stringify([{"profile":"successfully logged"}]));
        res.end();
    }
    else{
        res.write("wrong credentials");
        res.end();
    }

}).listen(3002,()=>{
    console.log("hi server is running on 3002 port");
});

//port
