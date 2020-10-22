

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
console.log(printName);
var getData=await GetBigData();
    Promise.all([printName,getData]);
}

main();