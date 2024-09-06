class user{
    constructor(username){
        this.username=username
    }
    logme(){
     // username ka value deta hai logme //  
     console.log(`username is${this.username}`) 
    } 
}
class Teacher extends user{
    constructor(username,password,email){
        super(username)// super ye syntax hai taake refer kiya ja ske username ko //
        this.email=email
        this.password=password
    }


    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}
const chai = new Teacher("hvdh","hgsdhdh","kjjj")
chai.addCourse()