const enc=require("bcrypt")

let formdata={
    "username":"subhash",
    "password":"sasi",
    "adharnumber":123456789
}

let newPassword=enc.hashSync(formdata.password,10)
console.log(newPassword)
formdata={...formdata,password:newPassword}

if(enc.compareSync("sasi",newPassword))
{
    console.log("Password-Matched")
}
else{
    console.log("password-not matched")
}