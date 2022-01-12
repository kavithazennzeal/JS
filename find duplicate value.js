const arr =[1,2,3,3,4,5,5,6,7,8,9];
const result =arr.filter((data,index)=>{
return(index !== arr.indexOf(data));});
console.log(result);//[3,5]







