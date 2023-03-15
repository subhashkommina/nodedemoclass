const os=require("os");
const fs=require("fs");

console.log(os.platform())

// reading and writing text file

fs.readFile("test.txt","utf-8",(err,data)=>{
    fs.writeFile("one.txt",data,(err)=>{
        if(err)
            console.log("error while writing file")

    })
})
