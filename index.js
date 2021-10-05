
var myFunc= require("./user");
const userModel=require("./models/usermodel");
var user=new userModel.UserModel("a",'b');

async function Print(){
 return 123;
}

async function GetBigData(){
    setTimeout(()=>{

        console.log("Million of data are fetched");
    },5000);
}

async function main(){
var printName=await Print();
var b=myFunc.MyNodeFunction();
console.log(b);
console.log("Hello Wolrd");
console.log(printName);
var getData=await GetBigData();
    Promise.all([printName,getData]);
}

let name="tauseef";
main();