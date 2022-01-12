var kavi =[{name:'kavitha',
            age:26 },
         {shivu:'karur',
          age:2
           }]

const result = kavi.some((data,index)=>{
return data.age===26
});
   console.log('result',result);//result true