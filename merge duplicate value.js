var a =[1,2,3,3,4,5,5,6,7,8,9,3];
var b =[39,39,40,40,60,76];
var c =a.concat(b);
var d=c.filter((data,index)=>
index!==c.indexOf(data))
console.log(d);//[ 3, 5, 3, 39, 40 ]