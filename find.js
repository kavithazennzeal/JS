const a =['a','b','d','e'];
const b= a.find((data,index)=>
{
    if(index==3)
    {
    return(data,index)
    }
});
console.log(b);//e