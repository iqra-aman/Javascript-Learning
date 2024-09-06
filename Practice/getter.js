class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get password(){ // getter use krte hain jb class ke bahr se koi value apko chahieye hoti hai //
        return this._password.toUpperCase()// jb value koi access kare ga tou usko get waali value mile gi //
    }
    set password(value){
this._password=value
    }
}
const hitesh= new user("hietsgsh","vdhhd")
console.log(hitesh.password)


// ye upr and neeche same baat hai bus tareeka alag hai//
 

function user1(name,pin){
    this._name=name;
    this._pin=pin;

    Object.defineProperty(this,'name',{
        get:function(){
            return this._name.toUpperCase()
        },
        set:function(value){
            this.name=value

        }
    })
}
const chai= new user1("vhsvdhs","jsjj")
console.log(chai.name);


// ab hum object ke method ke through karein gae//
const user2={
_email:'jjhh',
_pass:'hsgdhdg',

get email(){
    return this._email.toUpperCase()
},
set email(value){
    this._email=value
}

}
const tea= Object.create(user2)
console.log(tea.email)
//console.log(tea.email)
