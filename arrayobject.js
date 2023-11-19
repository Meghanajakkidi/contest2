let employess=[
    {
        id:119,
    name:"rani",
    age: 45,
    salary: 10000,
},
{
    id:120,
   name:"ramu",
    age: 30,
    salary: 15000,
},

{
    id:121,
   name:"ravi",
    age: 35,
    salary: 20000,
},
{
    id:122,
   name:"sunny",
    age: 40,
    salary: 10000,
},
{
    id:123,
    name:"bargavi",
    age: 30,
    salary: 10000,
}
]
   
//insert new employee with id name age salary
employess.push({id:124,name :"raju",age:30,salary:20000})
console.log(employess)

//display employees list
console.log(employess)

//remove specfic employees id
employess.splice(2,2)
console.log(employess)
//upadate specfic employee
let newarray = employess.map(function(curr,index,arr){
    if(curr.id===123){
    curr.salary=20000
return curr}
else{
    return curr;
}
})
console.log("after changing salary employees=",newarray )

//find the  employee which has maximum salary
 let foundemployees = employess.filter(function(curr,index,arr){
   if(curr.salary>15000){
    return curr.id
   }
    })
 console.log(foundemployees)

//find the employee which has minimum salary
 let foundemployees1 = employess.filter(function(curr,index,arr){
    if(curr.salary<12000){
     return curr.id
    }
     })
  console.log(foundemployees1)