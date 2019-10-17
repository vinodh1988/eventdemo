

function fetch(url){
    
    return new Promise(function(resolve,reject){
          $.get(url,function(data){
             
                resolve(data);
           });
    }
   );
    
}
/*
function call(){
fetch("http://localhost:9999/countries/all").then(
  (data)=>console.log(data),
  (reject)=>console.log(reject)
).catch(
    (e)=>console.log(e)
)
}
call();*/

async function call2(){
    try{
 let data=await fetch("http://localhost:9999/countries/all");
 console.log(data); 
    }
    catch(e){
        console.log(e);
    }
}
call2();
console.log("Executes way before");
