const accountId=14453
let accountEmail= "iqraaman@gmail.com"
var accountPassword="12345"   /* yahan variable ka naam ghalat hay */
const accountcity="daharki"
let accountState;

console.table([accountId,accountEmail,accountPassword]);

/*prefer not to use var 
because of issue in block scope and functional scope */

"use strict"; /*this is written to tell vs that use newer version of syntax in js*/

// alert(3+3) in node js the syntax for alert is different as compared to browser because if we write alert in typical way in browses it will show unlike in node js //

// readibility very imp in code//
//refer to ecma and mdn and tc39//

//different data types are as following//

let name="iqra"
//ab name ismei variable hai and ye sara string data type hai //

let age="18"
let isloggedIn=false // ye boolean data type hai//

// number range is 2 to power of 53//
// bigint of number bhut bara hai tou bigint use krna hita hai //
// ek data type string hai and can be used in single or double quote but  use double quote //

//boolean data tyoe iss mein bus true and false hota//
//null is stand alone value hai//
//undefined is when any value in undefined example //
let state;


//null representation hai empty value ka //


console.log(typeof null); //object


//symbol used for uniqueness //
// ye uper saare primitive data type hain//


//object

console.log(typeof "iqra");


//conversion and operation topic//

//let score = null
// agr number double quote ke andr hai tu string hai vo //
//score is variable//


//let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//nan means not a number but its tyoe is number//
//true=1 false=0//



//let isLoggedIn = "iqra"
//let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);//

//1 =true//
// "= false"//
// "iqra"//

//let emailNumber = 33
//let stringNumber = String(emailNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber)


//let usernameString = "iqra"
//let numberString = Number(usernameString)
//console.log(numberString);
//console.log(typeof numberString);

//let passwordNumber = 44
//let stringNumber = String(passwordNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

//let idString = "hi"
//let numberString = Number(idString)
//console.log(numberString);
//console.log(typeof numberString);

//let cvvNumber = 43
//let stringNumber = String(cvvNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);


//let emailString = ""
//let booleanString = Boolean(emailString)
//console.log(booleanString);
//console.log(typeof booleanString);

let phoneNumber = 33
let stringNumber = String(phoneNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//OPERATION topic//
//let value = 3
//let negValue = -value
//console.log(negValue);

let value = 7
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); //dou stars ka mtlb hota hai 2 raise to the power//
console.log(2/2);
console.log(2%5); // thisis remainder//

// we can join strings//

let str1 = "hi"
let str2 = " iqra"
let str3 =  str1+ str2
console.log(str3);


console.log("1"+2);
console.log(1+"2");
console.log("1"+2+"2");
console.log(1+2+"2");
// jb pehle string hota hai tou vo sub ko as a string treat krta hai jese ke pehle wale mein and out 12 aye ga
//
//jese last wale mein the output will be 32 kyu ke pehle number likha hai tou vo sub ko as a number treat kare ga //
// lastly  its is not good to write code like this  use parenthesis //


//FOR EXAMPLE//

console.log((3+4)*5%3);

console.log(true);
console.log(+true);
//thus is not recommended//

//Comparison topic//

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2 != 1);

// proble tb ati hi jb ap same data type ko compare nhi krte jese ke//
console.log("2" > 1);
console.log("02" > 1);
// javascript convert tou kredeta hai laikin khatra hota hai  same datatype of compare krna chahieye//


console.log(null > 0);
console.log(null == 0);
console.log(null>= 0);
console.log("2"===2);
//=== mein vo convert nhi krta ab ussne check krna hai data type bhi same hai ya nhi//
//null ki value hur programming language mei value 0 se ziada hoti hai//


// data tye has 2 kinds primitive and non primitive 
//difference in call by value or call by reference//
//kis tarah se data ko memory mei rakha jata hai aur access kiya jata hai iss hisaab se 2 data tyoe hai primitove and non promitive(reference type)//

//primitive has 7 types and they are call by value mtlb ke jb bhi kahin se kahin copy karou gae tou original data ke memory ka reference nhi doya jata apko u have the copy of it and changes u do are in copy//
// primitive:string,number,,boolean,null,undefined(variable defined hai memory bhi bus value nhi di hui),symbol(value ko unique banane ke liye jese button ko unique banana hai ), BigInt,//

const score = 100
const scoreValue = 100.9

const isLoggedIn = false 
const outsideTemp = null //null ka mtlb 0 nhi hota iska mtlb hta hai vo empty hota hai //
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
//ab yaha symbol ka kaam hai donou string value ko alg alg rakhna although the value is same that is 123 and string phir bhi donou unique show hou gae because og the symbol added//
console.log(id === anotherId);


// Bigint tb use hota hai jb bhut bare number ko store krna hao //
//const bigNumber = 52536748865433n

//nonprimitive or refernce (memory mei apko refernce allocate kiya jata hai ),array,objects,functions//


//kyu inko non primitive aur reference type bolte hain//

const heros = ["superman", "batman" , "catwoman"];
let myObj = {
    name:"iqra",
    age : 22,
}
//obj curly braces ke andr hota hai//

// function ko variable ki tarah kese declare krte hain?//

// function definition //
//function(){}//
//ab isko variable mei store karein gae //
const myFunction = function (){
    console.log("hello world");
}
// how to check what data tyoe it is//
console.log(typeof bigNumber);
console.log(typeof outsideTemp);

console.log(typeof Function);
//iska data type function araha hai laikin isko ojectfunction kehte hain aur hur non primitive ke sth object lgta hai although terminal pr show nhi hota //
// javascript ka czn typescript//

//aur null ka datatype object show hota hai//
//js dynamic//



// memory topic//
// memory has 2 types stack and heap //
// stack memory is used in primitive type is mei ye hai ke jou bhi variable declare krta ho uska copy milta hai//
//heap mei non primitive use hoti hai yaha original value ka refernce milta hai . change original value mei ata hai //
let myYoutubename = "iqraamandotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"





console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//   STRINGS// 
// string is used to amke codde modernized//

// how to stringinterpolation (variable ko sth mein kese likhta hain)//
//string ko declare kese krte hain (const identity = "iqra")//

const identity = "iqra"
const repoCount = 50
console.log(`hello my name ${identity} and my ma repocount is ${repoCount}`);


// agr key c=value chahieye and different method show krwaane hain tou aese variable declare karein gae //
 const gameName = new String ('hitesh.iqra.aman') //ye hum agr console mein likhein gae tou ye hur letter ke sth number show kare ga which is key value jese eeche 0 likha tou h show hova//
 console.log(gameName[0]); 
console.log(gameName[1]);

// how to access prototype//
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt('2'))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)// (isme ap negative value nhi likh skte jese ke -4 jou ke a slice mei likh skte ho) 4rt value jou ke s hai vo include nhi ho gi//
console.log(newString);


// slice method jis mein negative value askti hai substring wale braclet mein //

const anotherString = gameName.slice(-8,4)
console.log(anotherString);



//trim and replace method//
// trim tb use hota hai jb humein fazool ki space nhi vhahaiye hoti age useer nae glti se daal bhi di ho//

const spaceString = "   hiteshh   "
console.log(spaceString);
console.log(spaceString.trim()); // trim jou hai white spaces ke liye aur line terminator ke liye us hota hai // 

// agr replace krna hi//
const url = "https://www.google.com"
console.log(url.replace('google','iqra'))
console.log(url.includes('fatima'))
console.log(url.includes('google'))

// string ko array mein convert krna hai //
console.log(gameName.split('.'))


// numbers and maths//
//numbers//


const balance = 60 //iss tareeke se bhi value number hi hai laikin agr aur precisely batana ho ke number hi value ho tou hum neeche wale method se bhi kr skte hain //
console.log(balance);
const points = new Number(100);
console.log(points);
//console mei ja ke proto type bh dekh lena //

//ab number ko ap string mein bhi change kr ste ho fpr the sake of having more prototype //
console.log(balance.toString().length);
console.log(points.toString().length);
console.log(points.toFixed(2)); // ye to fixed ziada tr ecommerce webite pr hota hai taake agr precision value bhut bari araha hai tpu jou value apne bracket mein di hogi utne decimal tk vo value ajae gi //
console.log(balance.toFixed(3));

const otherNumber = 1123.8976
console.log(otherNumber.toPrecision(2));
// precision mei priority decimal se pehle milti hai//
console.log(otherNumber.toPrecision(5));

const hundred = 100000
console.log(hundred.toLocaleString('en-IN'));//locale string istemaal hota hai jb bht bari value ho and usko thora sahi taareke se ikhna ho with commas wagera//

//+++++++++++++++++maths topic+++++++++++//

console.log(Math.abs(-3)); //abs mein sirif - value jou hai vo positive hojati hai vice versa nhi hota //
console.log(Math.round(5.7));
console.log(Math.ceil(8.6));
console.log(Math.floor(8.5));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,7,5));

console.log(Math.random()); //ismei value 0 sur 1 ke beech hoti hai//
console.log((Math.random()*10)+1);


// ++++++++++date and time ++++//
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

//const myNewDate = new Date(2024,0,18);
//console.log(myNewDate);

const myCreatedDate = new Date("01-14-2024"); // output mei date 14c nhi ati kyu ke angrezou ka ek din peeche chlta hai kuch hisaab hota hai uss waja se //
//console.log(myCreatedDate);

const timeDate = new Date(2024, 0, 13, 6, 8);
console.log(timeDate);


//time stamp use jb dekhna  ho koi kaam kitni jldi hova hai//
const myTimeStamp = Date.now()
console.log(myTimeStamp);// iska output milisecong mein ata hai ye value 1january 1970 se le kr abhi tk ka milisecond value hai//

//ab kisi bhi date ko agr hum lein aur 1970 1 january se le kr uss date tk ka agr mili second pata krna ho tou hum aease krte hain//

console.log(myCreatedDate.getTime());

//comparison humesha milisec mein krna //
// seconds mein kese convert krte hain??//

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMonth());

newDate.toLocaleString('Default',{
    weekday:"long",
})


///+++++++++array+++++///  //array object hai//  //singlevariable mein kaafi ziada elements aa skte hain jese ke neeche //
//array humesha square brackets mein likhna hai//

// bracket ke andr AP number boolean ya string le skte hain//
// value agr access krni hai tou ap square bracket lagaou aur indexing ko check karo and array ki indexing 0 se start hoti hai //
 //shallow copy of an object whose property share the same refernces //
 //deep copy donot share the same refernce //
 //console ke andr array mein bhi prototype ko access kr skte ho //



const myArray = [0,1,2,3,4,5]
console.log(myArray[0]);

const myArry = ["iqra","farheen","naeema"];
console.log(myArry[0]);

// array methods//
myArry.push(7)
console.log(myArry)

myArry.pop(); //ismei last waali cheez remove hojati hai//
console.log(myArry);

myArry.unshift(9) //unshift mei forst per ajata hai jou bracket mein cheez di hui ho//
console.log(myArry);

myArry.shift()
console.log(myArry);

console.log(myArry.includes("7")); //agr include hoga tou yes kahei ga wrna false//
console.log(myArry.indexOf("naeema")); // isme index batata hai jese naeema 3 pr hai agr kisi aesi cheez ka index magein gae jou nhi hoga tou -1 ajae ga// 

const newArr = myArry.join() //join se change hojata hai string mein basically type change hojati hai//
console.log(myArry);
console.log(newArr);
console.log(typeof newArr)


//method: slice and splice//

//console.log("r" , myArray);
 //const myn1 = myArray.slice(1,3)

 //console.log(myn1);

 //console.log("b", myArray);
 //const myn2 = myArray.splice(1,3);
 //console.log("c",myArray); //yaha pr ye original ko manipulate kr raha hai splice mein jou ap likhte ho usko nikaal kr baaki value ajati hai //
 //console.log(myn2);

 console.log("e", myArray);
 const valueNum = myArray.slice(1,4)
 console.log(valueNum);

 console.log("t",myArray);
 const valueNum2 = myArray.splice(1,4);
 //console.log("w",myArray);
 //console.log(valueNum2);
 console.log("t",myArray);





 //+++++++++++Array ke mthods console mein dikh skte hain //

// array kisi bhi tyoe ka data entry kedeta hai basically koi bhi data le leta hai//
//array jou hai vo array ko bhi as a single data le leta hai //

const classFellows = ["iqra","shaista","maryam"];
const boyFriends  = ["none","muneeb","uzair"];
//classFellows.push(boyFriends);
//console.log(classFellows);

//console.log(classFellows[3][1]);
//console.log(classFellows[3][2]);

//if you want to combine two arrays u have to use spread operator//
const proposal = [...classFellows, ...boyFriends]
console.log(proposal);

//jb ap array ke andr array ho tou ap kis tarah usko erge kr ke likhta ho //
const anotherArray = [1, 2, 3,[4, 5, 6],8,9,[6,5 ]];
const realArray = anotherArray.flat(Infinity);
console.log(realArray);

//how to check if it is array or not// 
console.log(Array.isArray("iqra"))
console.log(Array.isArray("hi"))
console.log(Array.isArray([2]))
console.log(Array.isArray([5]))

//how to convert something into array//
console.log(Array.from("iqra"))
console.log(Array.from(9)) // output is an empty array beacuse it cant convert //


//agr ziada variable hou tou kis tarah array mein change krta hain//
 let score1 = 200
let score4 = 900
let score3 = 788
console.log(Array.of(score1,score4,score3));
 
let name1 = "iqra"
let name2 = "hitesh"
let name3 = "farheen"
console.log(Array.of(name1,name2,name3));






//+++++++++OBJECTS+++++++// 
// object can be declaredal ki tarah and constructor ki tarah //
//constructor se banate hain tou singleton object bnta hai//
// litral se singleton nhi bnta //

//object literals
Object.create //aese bhi object bnta hai nd ye constructor methid ke through object bnta hai and singleton bnta hai //


//aese bhi object bnta hai and object mein keys and values hote hain//
//key and value define hoti hai object mei//
//by default key ko string ki tarah treat krta hai agr koi word likh =a ho jese ke name humein double ys single quote mein likhne ki zaroorat nhi hoti hai//



//++symbol ko kis tarah access krte hain and agr uska typeof bhi symbol aye +++++//
const sym = Symbol("key")
const jsUser = {
    name : "iqra aman",
    age : 18,
    email : "iqraaman@google.com",
    isLoggedin : false,
    lastLoginDays: ["mon","tues",],
    [sym] : "mykey",

}

//+++++access kese krte hain +++++//
console.log(jsUser.email)
// dusra tareeka ye hai//
console.log(jsUser["email"]); //ye wala method better hai//
console.log(jsUser[sym]);

//++++++value ko chnage kese krte hain+++++//
jsUser.name = "fatima"
console.log(jsUser["name"])

// freeze bhi kr skte hain jis mein basically agr ap further chnages krna chah rahe hote hain tou vo possible nhi hota//

//Object.freeze(jsUser)
jsUser.name= "jamali"
console.log(jsUser["name"]);


// funstions ko bhi variable ki tarah treat karein// 

jsUser.greeting = function(){
    console.log("hello js user");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());
//function anonymous likha ha besically function execute nhi hova function ka refernce aya hai //


//++++++ function mein agr kisi cheez ko refer krna hai tou pehle 
//waali cheez ko BACK TICKS mein change kero phir ${} and in curly braces ke ander ap likho gae this.  ++++++=//
//    tou saari values ajea gi jese ke email name jou uper pehle se apne likhi ho//

jsUser.greetingTwo = function(){
    console.log(`hello ${this.age}`);

}
console.log( jsUser.greetingTwo());


// singleton object//
//const tinderUser = new Object(); //ye singleton object hai //
//console.log(tinderUser)

const tinderUser = {} //non singleton object//
tinderUser.id = 123
tinderUser.name = "iqra"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

// hum object ke andr bhi object daal skte hain //
const regularUser = {
    name : "hamza",
    email: "hamza@gmail.com",
    age :{
        hamza : 16,
        huzaifa :18,
    }
}
console.log(regularUser.age.hamza);

// ++++++ merge the objects ++++++//
const obj1 = {1:"q", 2:"w",};
const obj2 = {3:"t",5:"g"};
//const obj3 = Object.assign({}, obj1,obj2);
//console.log(obj3);

const obj4 = {...obj1,...obj2};    //++++++ye spread method hai +++++//
console.log(obj4);

// data base se kese value ati hai  iss mein array of objects ata hai //

const users = [
    {
        id :1,
        email :"jjjsd@jnsjd"
    }
] 
// agr first value access krni hai tou //
//users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //++++jb array ke andr apko array chahieye ho +++++//

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //objects ke andr loop through kr rahe hain and value nikaal rahe hain and kbhi kbhi value hoti hi nhi hai tou check krne ke liye ke value hai ke nhi tou ye istemaal hota hai //



//++++++++De structuring of objects++++//

const course = {
    courseName :"js ",
    price : 99,
}
console.log(course.courseName);
//+++object ko destructure krna hai //
const{price:money} = course
console.log(money);
const{courseName:me} = course
console.log(me);



//backend se value ati hain in jsn //
//jsn object ki tarah hi  hai and aese dikhta hai//
//object ka laikin name hota hai//
{
   // "name": "hitesh",
   // "coursename":  "js in hindi",
    //"price":  "free" 

}

// API can be array format in which kaafi object hote hain array ke andr //
// API KO smjhne ke liye json formulator use kr lo //
// obkect ko json form mein likhna hota hai //



//+++++++++ functions +++++++//
// jou bhi code hai usko ek package mein bnd kr diya hai and usko jaha bhi le ja skte hain in form of copies//
function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
}
sayMyName()

function addTwnoNumber(){
    console.log(9+ 8)
}
addTwnoNumber()

function addTwoNumber1(){
    console.log(3,"4");
}
addTwoNumber1(3,"4"); //ek string hai tou dusre jko bhi as a string smjhe ga//

function check() //bracket ke andr jou ho usko parameter kehte hain//
{
    console.log(3,null); // iss wale bracket mei jou ho usko argument  kehte hain//
    
    
}
check(3,null);

function addTwoWords(word1,word2){
    let result = word1 +word2 //let result ke baad agr console.log likhein gae and bracket mein bhi kuich hoga tou vo print nhi hoga af=gr uske upr likhein gae tou orint higa//
    return result
}
const result = addTwoWords("iqra","aman")
console.log( result);
const result3 = addTwoWords("hajra","aman")
console.log( result3);





function addTwoValue(value1,value2){
    return value1 + value2
}
const result1 = addTwoValue("t","r")
console.log("result:", result1);


function loginUserMessage(name){
    if(name==="ramsha"){
        console.log("please");
    }
    return `${name} just logged in`
}
    console.log(loginUserMessage(""))


    //if(!) // ye exclamotory mark jou hou hota hai true ko false mei krta hai vice versa
    //empty vlue ko false smjha jata hai and undefinedd ka bhi value false ata hai// 


    function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500)) 
console.log(calculateCartPrice(500,877,33))

function addAlphabets(...alpha){
    return alpha
}
console.log(addAlphabets("a","e"))
console.log(addAlphabets("p","j"))
// flhaal sirif 200 output aye ga//
// iss problem ko solve krne ke liye ap ... likhte ho num1 se pehle//
// rest operator and spread operator same teen dots hi hote hain bus use different hote hain//
// abhi ye dots rest operator hain// 
//ab out mein humein teenou values ayi hain array ki form mein//


//function calculateCartPrice(val1,val2,...num1){
//    return num1

//console.log(calculateCartPrice(200,499,500,699))
// iska output 500 and 699 aye ga kyu ke pehle ki amount value 1 and 2 mein chali gae hai//

 // +++++++how to pass/use object in the function++++//
 const user={
    username : "iqra",
    price : 800
 }
 function handleObject(anyobject){
    //return anyobject
    console.log(`username is ${user.username} and the price is ${user.price}`);
 }
 handleObject()
//console.log(handleObject(`username is ${user.username} and the price is ${user.price}`))



// how to pass arrays//
 
const myNewArray = [200,800,7536]
function myArray4 (newArray){
return newArray[1]
}
console.log(myArray4 (myNewArray));





const myNewAlphabets =["a","b","c"]
function newAlphabets(words){
    return words[2]
}
console.log(newAlphabets(myNewAlphabets))



//_+++++++++++SCOPES++++++//
// object mei ye curly braces sirif object declaration ke liye use hote hain //
// {} basically curly braces jb kisi function ke sth ya phir if or else ke sth ata hai tou hum isse scope kehte hain //




var c =987 //ye if ke bahr hai isko global scope kehte hain and iss mein jou value hoti hai vo block scope ke andr available hoti hai //
if (true){ // if ke andr jou hai usko kehte hai block scope  and ismein jou value hoti hai vo global scope ke andr available nhi hoti//
    let a =45
    let b =87
    const c =98
    console.log("INNER: ",c)
}

function one(){ // ye concept is tarah hai jese ek chota bacha bare bache se ice cream le skta hai laikin vice versa nhi hoskta//

    const username = "laiba"
function two(){
    const website = "youtube"
    console.log(username);
}
//console.log(website);  //ye arror hai kyu ke ye block scope se bahr hai and it wants to access block scope//
two()
}
one()

if(true){
    const name5 = "ahmed"
    if(name5==="ahmed"){
        const website ="youtube"
        console.log(name5+website)
    }
    //console.log(website); ye error aye ga
}
//console.log(name5); yaha bhi error aye ga

//++++++ technique in which we wrirte function+++++++// 
console.log(addOne(5)) 
function addOne(num){
    return num +1
}
//addOne(5)//// isko upr le kr jae gae//

// isko expression function kaha jata hai//
const addTwo =function(num){
    return num +2
}
 console.log(addTwo(4)) // iss chez ko upr se declare nhi kr skte//



 //++++++arrow function+++++//
 // THIS keyword tells us about current context//

 const userId={
    lastname:"haziq",
    price: 88,
    welcomeMessage : function(){
console.log(`${this.lastname}, welcome to website`);
    }// this . is used to refer to the current context//
 }

userId.welcomeMessage()
    userId.lastname = "iqra",
    userId.welcomeMessage()
    console.log(this)

    //browser  ke andr jb engine run krta hai tou sb se ziada global object is window object//
function chai(){
    let username = "hitesh"
    console.log(this.username); //this syntax cant be used in function it can be used in object
}
chai()

// function ko declare kese krte hain and arrow function ke through kese krte hain//
  //const chai = function(){
    //let username = "hitesh"
    //console.log(this.username);

  //}
  //chai()
//   Isko comment kr do
  // iska bhi otout nhi aye ga kyu ke this jou hai vo function mein kaam nhi krta//

//const chai = () => {
    let username = "hitesh"
    console.log(this);
//}
//chai()

//++++arrow function++++++//
 //() => {}
 // isko kisi variable mein daalte hain//
 const addTwo3 = (num3, num4) => {
    return num3 + num4
 }
// explicit jb return likhna hota hai//
 console.log(addTwo3(9, 7))

 // implicit return method jis mein ap parenthesiis hata dete ho mtlb ke curly braces//
 // implicot ka ye hain ke apko return likhne ki zarurat nhi hai mein maan leta ho ke apko return likhne ki zarurat nhi //
// curly braces ke andr return likhna hoga //
 const addtwo4 = (num4,num5) => num4 +num5
 console.log(addtwo4(8,4))

 //jb object ko run krna hoga //
 const word = (word1,word3) => ({username:"poo"})
 console.log(word("jhh","juhu"))



 //++++immediately invoked function expressions (IIFE)//
 // IIfe tb istemaal hota hai jb humne kisi function ko potentially saveguard krna ho kis global scope se//


 // parenthesis laga kr block kr skte hai//

 //function chai1(){
   // console.log(`DB CONNECTED`);
 //}
//chai1()

// agr global scope pollute krna chahta hai and we want ke ke vo kisi specific function ko na pollute kare then we write IIFE//
(function chai2(){
    console.log(`DB CONNECTED`);
 })();
 ()() // first parenthesis is jis mein function call hoga and second wala jou hai usme execution hogi//

 //++++  javascript  execution context+++++//
 // global execution context bnta hai and this variable ko inke andr rkh dete hain
 //browser ka GEC different hota hai and javscript single threaded hai
 // function execution context//
 // EVAL execution context ye property hota hai GEC ka//
 // js code 2 phases mein run hota hai and 1st phase is memory creation phase ya phir creation phase//
 // dusra phase execution ohase//
 // memory creation phase mein variable joudeclare kiye hain unke liye jagah allocate hoti hai//
 // execution mein asal kaam hota hai// 


 // memory phase mein sub variable  ko likha jata hai and uske andr undefined likha jata hai and 
// agr function hoga tou uska jou bhi naam hoga vo likhein gae and saara function ussi definition mein ajae ga //
// phir result 1 bhi undefined aye ga and result 2 bhi undefined aye ga//



// execution phase//
 //val  mein 10
 //val mei 5
 // addnum apna execution context bnata hai//
 // jitni baar bhi function execute hota hain unki baar ek naya box create hota hai jisko bolte hain new execution context  AND iske andr ek new variable environment and execution thread banaya jata hai // 
 // JITNI BAAR FUNCTIIN HOGA UTNI dafa memory phase and execution phase repeat hoga //
 // ab  hum phir se memory phase kare gain and function ke andr waali cheezein likhein gae //
 // val1 mein phir se undefined//
 // val2 mein bhi undefined//
 //total mein bhi undefined// 



 // ab execution phase mein jaein gae//
 // pehle val1 hoga jismein value 10 jae gi//
 // val2 mein 5 jae gi //
 //total mein 15 jae ga//
 // ye tota value return hoti GECONTECONTEXT MEI//
// vo jou boxtha new variable environment and and execution thread ka vo delet  bhi hojae ga///
// result1 jou hai vo execution mein agaya //
// result2 bhi execution phase mein aye ga//
//and ab vohi kahani repeat hogi//
// abb NEW VARIABLE ENVIRONMENT AND THREAD BANE GA BOX MEIN AND AB VOHI MEMORY PHASE AND EXECUTION PHASE REPEAT HOGA// 

// +++++++++++++CALL STACK++++++++//





let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total =num1+num2
    return total
}
 let result2 = addNum(val1,val2)
 let result33 = addNum(10,8)


