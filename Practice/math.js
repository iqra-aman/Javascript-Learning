const descriptor =Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)
//console.log(Math.PI);

const chai ={
    name:"iqra",
    price:"13",
    isavailable:"true",
}
//console.log(Object.getOwnPropertyDescriptor(chai,"name"));

        
  Object.defineProperty(chai,'name',{

  
  writable:false,
  enumerable: false,  
  })  
  console.log(Object.getOwnPropertyDescriptor(chai,"name"));

    
