

function promiseProvider(time){
	return new Promise(function(resolve,reject){
		setTimeout(()=>{
			
				if(time<=5)
					resolve("Good Way to Work");
				else if(time>5 && time<10)
					reject("Not A great way to work");
				else
					reject("WorstCASE");
			
			
			
		},time*1000)
	});
	
}
/*
promiseProvider(8).then(
(data)=>{console.log("Resolved::"+data)},
(data)=>{
	if(data=="WorstCASE")
      throw "WORST CASE";
console.log("Rejected::"+data)}
).catch(
(error)=>console.log("Error is "+ error)
);
*/

async function call(){
	try{
        let x=await promiseProvider(12);	
		console.log(x);
	}
	catch(e){
		console.log("IN CATCH");
		console.log(e);
	}
}

call();

