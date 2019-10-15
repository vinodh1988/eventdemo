var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on("cry1",function(data){
    console.log("First Activity for cry1");
    console.log(data);
})

eventEmitter.on("cry1",function(data){
    console.log("second activity for cry1")
    console.log(data);
})

eventEmitter.on("cry2",function(data){
    console.log("only activity for cry2");
    console.log(data);
})


module.exports=eventEmitter;