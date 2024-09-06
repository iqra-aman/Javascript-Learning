//const user ={
    //userName:"iqraaman",
    //age:"eight",

    //getUserDetails: function(){
       
       //console.log(`username :${this.userName}`) 
      // console.log("got detail form data base")
      //console.log(this);
  //  }
//}
//console.log(user.userName);
//console.log(user.getUserDetails())
// this keyword usehota hai jb apko context bhi dena hota hai //


// constructor function//
// allows you to ke ap ek hi object se multile instances bna sako //
 const date =new Date() // new is constructor function and helps to make new context//

 function User(username,loginCount,isLoggedIn){
    this.username= username
    this.loginCount=loginCount;
    this.isLoggedIn = isLoggedIn 

    this .greeting=function(){

        console.log(`welcome ${this.username}`)
    }

return this
    
    
    ;// this isliye dala hai to show ke ye variable hai ek kism ka context dene ke liye//
 }
// new ap likhte ho tou o cheez alag hojati hai usko over right nhi krskte//
 const userOne=  new User("histesh",12 ,true)
 const usertne= new User("histesh",13 ,true)
 console.log(userOne.constructor); // constructor property is refernce khud hi  ke baare mein jese iss case mein output user aya hai//
 console.log(usertne);
// new likhte hi ek empty object create hota hai ya phir new instance create hota hai //
//2nd step:  constructor function call hota hai due to new keyword and packs everything 
// 3rd: this keywordmein saari arguments ajati hain//
// 4rth :sub mil jaata //













