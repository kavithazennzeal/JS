var kavi =[{name:'kavitha',
            age:26 },
         {shivu:'karur',
          age:2
           }]

kavi.forEach((data,index)=>{
data.age=data.age+1;
});
   console.log('result',kavi);




  // result [ { name: 'kavitha', age: 27 }, { shivu: 'karur', age: 3 } ]
