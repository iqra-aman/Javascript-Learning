//promise is an object//
const promiseOne = new Promise(function(resolve, reject){
    // do an async task like:
    // Db calls, cryptography,network call//
    setTimeout(function(){
        console.log("async task is complete");
        resolve()
    },1000)
})// ye humne promise create kiya hai //
// promise ka ndr we call function jis ke 2 parts hote hain either resolve or reject//
//new keyword se ek new instance mil jata hai//


// now promise ki consumption//
promiseOne.then(function(){
    //yaha pr promiseOne return hoga mtlb iss function ka ye kaam hai//
    console.log("promise consumed");
    //promise consumed nhi show horaha as an output kyu ke humne.then and resolve ko connect nhi kiya and inko connect krne ke liye upr wale mein hum resolve() likhe gae//
})
//resolve ka connection hai .then ke sth and iske andr callback milta hai//
// promise consumed humesha baad mein likha aye ga output mein//


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"iqra",age:3})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);

})


const promiseFour = new Promise (function(resolve ,reject){
    setTimeout(function(){
        let error= true
        if(error){
            resolve({username:"iqra", password:"ok"} )
        }else{
            reject('ERROR:something wenrt wrong')
        }
    },1000)

})
promiseFour.then((user)=>{
console.log(user)
return user.username
}).then((username) =>{
    console.log(username);


}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is resolved or rejected"))



const promiseFive= new Promise(function(resolve,reject){
setTimeout (function(){
    let error= true
    if(!error){
        resolve({username:"js",password:"123"})
        }else{
            reject('error js went wrong')
        }
},1000)
});
// async bhi ek syntax hai jou .then ya phir .catch ki tarah hota hai //
// async wait krta hai kaam  hone ka and phir hi ye agae proceed krta hai // 
//promiseFive.then
async function consumePromiseFive(){
    try{
     const wait =await  promiseFive
     console.log(wait);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()






