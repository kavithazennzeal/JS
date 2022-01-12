
const arr=[{name:'kavi', age:26},
{name:'a',  age:27},
  {name:'b',age:17},
{name:'c', age:29},
{name:'d', age:23},
{name:'e', age:13},
{name:'f', age:24},
{name:'g', age:24},
{name:'h', age:16},
{name:'i', age:13},
{name:'j', age:26},
{name:'k',  age:26},
{name:'l', age:26},
{name:'m', age:26},
{name:'n', age:26},
{name:'o', age:26},
{name:'p', age:26},
{name:'q',age:26},
{name:'r', age:26},
{name:'s', age:26},
]
const b= arr.filter(function(data,index)
{
    return (data.age>=18)
});
console.log(b);





//<-----output ------>
//[ { name: 'kavi', age: 26 },
 // { name: 'a', age: 27 },
  //{ name: 'c', age: 29 },
  //{ name: 'd', age: 23 },
 // { name: 'f', age: 24 },
 // { name: 'g', age: 24 },
 // { name: 'j', age: 26 },
 // { name: 'k', age: 26 },
 // { name: 'l', age: 26 },
  //{ name: 'm', age: 26 },
  //{ name: 'n', age: 26 },
  //{ name: 'o', age: 26 },
  //{ name: 'p', age: 26 },
  //{ name: 'q', age: 26 },
  //{ name: 'r', age: 26 },
  //{ name: 's', age: 26 } ]
