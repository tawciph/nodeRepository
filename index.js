

async function Print(){
 return 123;
}

async function GetBigData(){
    setTimeout(()=>{

        console.log("Million of data are fetched");
    },5000);
}

function main(){

    Promise.all([print(),GetBigData()]);
}

main();