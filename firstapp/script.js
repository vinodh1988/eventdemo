/*

    Javascript is an interpreted language
    
    Interpreted languages will not have datatypes
    
    But it supports variety of data --number,boolean,string
    
    A variable in js can hold any kind of object
    
    Javascript dont follow strict syntactic rules
    
    apart from number,boolean ,string  there will be
    arrays, functions , objects
    
    everything in js is object
    
    a string is an object, number is an object
    boolean is an object, function is an object
    ,object is an object, array is an object

    a variable in javascript holds object
    
console.log(x);
console.log(x[2]);

x[2]="Kiran";
console.log(x);
/*
x[20]="Sam";
console.log(x);

console.log(x.length);

/*for(var i=0;i<x.length;i++){
        console.log(x[i]);
  for(var  i in x){
       console.log(x[i]);
  }*/



/*a=20;
b="Ram";
c=true;

console.log(a+ " " +b +"  "+c);*/

//array is collection of objects
/*
x=[12,13.23,"Ravi",true,245,[12,"Ram","Javid"],"Naveen"];

console.log(x);

for(i in x){
    if(typeof(x[i])=="object")
        {
            console.log("***************************");
            for(j in x[i])
                console.log(x[i][j]);
            console.log("***************************");
        }
    else
    console.log(x[i]);
    
}*/
/*
function fun123(a,b){
    console.log("a is "+a);
    console.log("b is "+b);
}  //function definition


fun123(12,13);
fun123(12,"Ram");
fun123("Ravi","Chrisht");
fun123([12,3],[35,35,45]);
fun123();
fun123(53)
*/
/*
var d=function(){
    
    console.log("Dummy function");
}

d(109);
*d(239,345);
d();
*/

/*
function fun(){
    return "funny123";
}

function fun2(){
    
}

console.log(fun());
console.log(fun2());
*/
/*
function fun(p){
    console.log("Line1");
    p("Ramu");
    console.log("line 2");
    p("Rahul");
    console.log("Line3");
} 

fun(function(x){
    console.log("Received  "+x);
});//function which is passed as a parameter is called callback function
*/

/*
let a=[23,"fjj","Jack",function(){console.log("DRRRR")},"Naman"];


for(x in a){
    if(typeof(a[x])=="function")
        a[x]();
    else
        console.log(a[x]);
}*/

//Javascript objects
/*
a={sno:1,name:"Ravi",city:"chennai",married:true};
console.log(a);
a.age=45;
console.log(a);
a.city="Hyderabad";
console.log(a);
a.skills=["java","c++","SQL"];
console.log(a);
a.show=function(){
    console.log(this.name);
}
console.log(a);
a.show();
*/
/*
var group=[34,35,34];
function stamp(){
    
}

var jumbo="324";

console.log(window);
*/
/*
function stamp(){
    console.log("Hey...!!!");
    console.log(this);
}

new stamp();
new window.stamp
*/
/*
function Student(sno,name){
    this.sno=sno;
    this.name=name;
}

Student.prototype.display=function(){
    console.log(this.sno+" "+this.name);
}


var obj=new Student(12,"Ravi");
obj.display();
var obj1=new Student(13,"Naveen");
obj1.display();
*/
//es2015
/*
class Student
{
   
    constructor(sno,name){
         this.sno=sno;
         this.name=name;
    }
    
    display(){
         console.log(this.sno+" "+this.name);
    }
}

var obj=new Student(12,"Ravi");
obj.display();
var obj1=new Student(13,"Naveen");
obj1.display();
*/

//es2015

let a=function(){
    console.log("hello");
}

let b=function(){
    return "Hey!!!";
}
let add=function(a,b){
    return a+b;
}

a();
console.log(b());
console.log(add(12,14));

let x=()=>console.log("Hello");
let y=()=>"Hey";
let sum=(a,b)=>a+b;

x();
console.log(y());
console.log(sum(12,14));





