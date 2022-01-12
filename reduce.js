var kavi =[{name:'kavitha',
            age:26 },
         {shivu:'karur',
          age:2
           }]

const output = kavi.reduce((total,data)=>
{
    return total + data.age
},0)
   console.log('result',output);//result  28




