class User{
    constructor(username,password,email){
        this.password= password;
        this.email=email;
        this.username=username;
    }

    encryptPassword(){
        return`${this.password}abs`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}
const chai= new User("chai","hvhg","bhsdh");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene//

function user(username,email,password){
    this.email=email
    this.password=password
    this.username=username
}
user.prototype.changeUsername=function(){
    return`${this.username.toUpperCase()}`
}
const tea =new user ("hgudg","sdff","kdhjgd")
console.log(tea.changeUsername());