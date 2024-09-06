// function ke andr agr hum ek aur function ko call karein tou jb hum .this likhein gae tou vo global
//execution ko refr kare ga 
// agr window hogi tou jb .this likhein gae tou vo window call karei ga and agr node hoga tou humnein{} ye dega//

//function setUsername(username){
//this.username=username
//}
function createUser(username,email,password){
    //setUsername(username)   // ismein call nhi horaha username //
  // setUsername.call(this,username)
   //.call use krte hai taake hum reference hold kr ke rakhein//
   this.username=username 
   this.email=email
    this.password=password 
}

const chai= new createUser("chai","chiaushjd","ihihi")
console.log(chai);// iss sare code mein username nhi call hova mtlb ke outout mein username nhi likha aya although humne console.log (chai )kiya//

