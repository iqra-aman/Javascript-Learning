 //++++immediately invoked function expressions (IIFE)//
 // IIfe tb istemaal hota hai jb humne kisi function ko potentially saveguard krna ho kis global scope se//


 // parenthesis laga kr block kr skte hai//

 //function chai1(){
   // console.log(`DB CONNECTED`);
 //}
//chai1()

// agr global scope pollute krna chahta hai and we want ke ke vo kisi specific function ko na pollute kare then we write IIFE//
//ye named IFFIE hai//
(function chai2(){
    console.log(`DB CONNECTED`);
 })();


  // first parenthesis is jis mein function call hoga and second wala jou hai usme execution hogi//

 // arrow function mein IFFIE //
 // ye unnamed IFFIE hai//
 ( (name) => {
    console.log(`DB CONNECTED ${name}`);
 }) ("iqra");

 ( (age) => {
    console.log(`my age is ${age}`);
 } )(12)

 // dou IFFIE jb bhi likhnaho tou column lagana bhut zaruri hota hai//



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

// yaha pr LIFO ka concept hai ,which is last in firts out//



let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total =num1+num2
    return total
}
 let result2 = addNum(val1,val2)
 let result33 = addNum(10,8)

//++++++++Control flow /logic flow++++++//
// issmeiin  basically ye hota hao ke ek agr ap logout karo tou kuch code run ho and agr ap logout kro touphir koi aur code run karei//
// ye upr waali statement example ke taur pe hai just to understand the concept//
// control flow pehla if statement//

// if//
// condition true honi  chahiye otherwise if ke andr wala cde run nhi hoga//
//if (condition){

//}
//if(true){

//}
// ab true evaluate kese hoga //
// in this case this is true thus it will execute the code//
//if (2==2){

//}
//comparison ke operator hote hai//
// >,<, <=(baari ya barabr ),>=,==,= single equal ye operator assignment ka hai,!=(not equal),=== this also checks type(ex2==="2"),//

const temperature= 87;
if(temperature===87){
   console.log("good temp")
} else{
   console.log("temp not good")
}

const score = 300
if(score>200){
   const power = "fly"
   console.log(`user power ${power}`);

}
//console.log(`user power ${power}`); // iska error iss liye show horaha hai kyu ke ye scope se bahr hai //
// scope uska curly braces ke andr tk rahe ga //
// const power ki jaga h agr hum var power likhte tou phir output show hota //
// var ka scope completly global hai thus dont use var//



// short hand notation//
// implicit scope  jis mein jou hai curly braces nhi lagate and maan liya jata hai ke lage huve hain//
// likhna ek hi line mein hai//
const balance = 988
if (balance>400) console.log("test");

// dou teen agr condition agr check krni ho//
const cost =1000
if (cost>2000){
   console.log("less than 1000")
} else if(cost>3000){
   console.log("okay")
}else if (cost>9000){
   console.log("okayyyy")
} else{
   console.log("pookie")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

// & ye tb likhta hain jb ek sth ek se ziada conditions check krni hou//

if(userLoggedIn&& debitCard){
   console.log("allow to buy course")
}

// ye || tb istemaal krte hain jb check krna ho ke either one of them is true //
if (loggedInFromGoogle||loggedInFromEmail){
   console.log("allow to buy course")
}

// ek value hai tou usko multiple conditions se jb run krna hoga tou hum switch use krte hain//
 // basoc switch ka syntax//
//switch (key) {
  // case value:
      
      //break;

   //default:
     // break;
//}

// examlple when to use switch//
const month = 3 // 3 ki jagah string ho tou phir numbering ki jagah string likhna//
switch (month) {
   case 1:
      console.log("jan");
       break;
   case 2:
      console.log("feb");
       break;
   case 3:
      console.log("march");
      
       break;
case 4 :
   console.log("april")
   break;
   default: // ye tb aye ga jb koi bhi value jou ai match nhi kare gi//
      console.log("default case matched")
      break;
}

// agr key match hojata hai tou uske baad wala sara code execute hota hai agr break likha ho/ except default/
// agr break na hota tou neeche waale cases ko ye match hi na krta//
 


// humne condition koi prominent krke true nhi di laikin phir bhi issme assume kr iya hai ke condition jou hai vo true hai//
const userEmail = "hitesh@gmail.com"
if(userEmail){
   console.log("got user email");
}else{
   console.log("did not got the user email")

}
// empty string ko vo as a false hi leta hai//
const userEmail1 = ""
if(userEmail1){
   console.log("got user email");
}else{
   console.log("did not got the user email")

}


// empty array ko as a true hi consoder krta hai //
const userEmail2 = []
if(userEmail2){
   console.log("got user email");
}else{
   console.log("did not got the user email")

}


// falsy values //
// false,0,-0,bigint 0n,"",null,undefined,NaN,

// truthy values//
//  "0",'false'," ",[],{}, function(){},


//empty object ko kis tarah check krte hain//
 const emptyObj = {}
 if(Object.keys(emptyObj).length===0) {
   console.log("object is empty");
 }

 // browser mein false==0 ka result rue hota hai//
 // false =='' ka output true ata hai//
 // 0=='' ka output bhi true aye ga//


 //nullish coalescing operator  (??): null and undefined ke sth hum deal krte hain //

 let val9;
 val9 = 7 ?? 10
 val5 = null ?? 8 // 8 asssign hogi kyu ke NCO ye check krta hai ke agr null value ayi hai tou uska safety check krta hai
console.log(val5);
 console.log(val9);
 val8 = undefined ?? 7
 console.log(val8)

 val6 = null ?? 9 ?? 79 // ye different functions ke output hain tou iss case mein jou oehli value ajati hai ye usiko as a output show krta hai


 // terniary operator//
  // condition ? true : false//
   const icedTea=900
   icedTea <=1000 ? console.log("yes") : console.log("no");


   // loops ya phir iterations//
   // for loop//
   // curly braces ka andr block scope//
   // first semicolon se le kr dusre tk ko condition check kehte hain//
   // important: block scope end hone se pehle vo index ki value increase kare ga and phir se saari cheezein repeat hogi//
   //for (let index = 0; index < array.length; index++) {
      //const element = array[index];
      
//   }

   for (let i = 0; i < 10; i++) {
      const element = i;
      if(element==5){
         console.log("5 it is");
      }
      
      console.log(element);
      
   }
// loop ke andr loop laga skte hain//
   for (let i  = 0; i <= 10; i++) {
      console.log(`outer loop value ${i}`)
      for (let j = 0; j <= 9; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
         console.log(i + '*' + j +'=' + i*j);
      }
     
      
   }

   let myArray = ["batman", "flash","catwoman"];
   console.log(myArray.length);
   for (let u= 0; u < myArray.length; u++) {
      const element = myArray[u];
      console.log(element);
      
   }

   // break and continue //
  
  
   for (let index = 1; index <= 20; index++) {
      if(index==5){
         console.log(`5 is detected`);
         break
              }
              console.log(`value of i si ${index}`);
      
   }
   
   for (let index = 1; index <= 20; index++) {
      if(index==5){
         console.log(`5 is detected`);
         continue // ismein vo ek dafa maaf krdeta hai 5 wala ye print nhi kare ga//
              }
              console.log(`value of i si ${index}`);
      
   }


   // while and do while loop// 
 
   let be = 0;
   while(be <=10){
      console.log(`value of be is ${be}`);
      be = be +2 // variable ka jou bhi naam ho usko continue krwaane ke liye apne ye likhna hota hai //
   }

   let myArray1 = ['flash','batman','superman'];
   let arr = 0
   while(arr< myArray.length){
      console.log(`value is ${myArray1[arr]}`);
      arr = arr +1
   }

   // do while mein pehle code run hota hai and baad mein condition check hoti hai //
   let score1 = 2
   do{
      console.log(`score is ${score1}`)
      score1++;
   }
   while(score1<=10);


// high order Array loop//
// for of loop//
["",""] // array ke andr string bhi daal skte hain
[{},{}] // array ke andr hum object bhi laga skte hain//
const arr1 = [1,2,3,4]
// for ke bracket ke andr jou object hai vo cheez ko kaha gaya hai not the actual syntax {}//
// array ko loop mei show krne ke liye ap forof use krte ho//
for (const num of arr1) {
   console.log(num);


   const greeting = "hello world ";
   for(const greet of greeting){
      console.log(`each char is ${greet}`)
   }
   
}

// maps//
// map bhi ek ksism ka object hai//
// unique value hoti hai koi duplicate value nhi hoti//

const map = new Map()
map.set('IN', "india")
map.set('pk',"pakistan")
map.set('fr',"france")
console.log(map);
// loop kese lage ga//
for (const key of map) {
   console.log(key); // pura array rint hogaya//

   
}
for (const[key ,value] of map) {
   console.log(key,':', value); // pura array rint hogaya//
   
   
}


// object pr kese loop lagaein gae//
// object jou hai forof loop nhi laga skta //

//const myObject = {
   //'game1' : 'nfs',
   //'game2' : 'spiderman'
//}
//for (const [key, value] of myObject) {
  // console.log(key, ':',value);
   // this code will show error//

   // forin loop is used for object //
   const myObject1 ={
      js: 'javascript',
      cpp : 'c++',
      ruby :'ruby'


   }
for (const key in myObject1) {
   //console.log(myObject1[key]); // ismein output jou hai : ke baad wala ata hai kese ke javascript//
   //console.log(key); // ismein jou hai : ke pehle wala output ata hai //
  // console.log (`${key} shortcut is forv${myObject1[key]}`)
}

// forin loop applied to array //
const programming = ['js','cww','python','rb']
for (const key in programming) {
   //console.log(key); // ismein jou oit put aye ga vo numeric aye ga //
   console.log(programming [key]);
      
   }

   // map cannot be applied to forin loop because it cannot be interated//

const map1 = new Map()
map.set('IN', "india")
map.set('pk',"pakistan")
map.set('fr',"france")

for (const key in map1) {
   console.log(key);
      
   }

 // foreach loop//  
 // kuch loop array ke andr direct property ke andr add ki jaati hai //

 const coding = ["js","ruby","cee"];
 coding.forEach(function name(){})//callback function mein ap name nhi likhte ho//
 // and ye functionarray ke andrchl raha hai//
 
 coding.forEach(function (val){
   console.log(val);
 })

 // arrow functiion bhi ek tareeka hai //
 coding.forEach( (item)=> {
   console.log(item);
 })

 // function print me//
 function printMe(item1){
   console.log(item1);
 }
   
 coding.forEach(printMe)

 coding.forEach ((item,index,arr) => {
   console.log(item,index,arr);
 })

// array ke andr jbb object hota hai tou uske liye foreach ap use krte ho//

const myCoding =[
   {
      languageName : "javascript",
      languageFileName : "js",
   },
   {
      languageName : "cplusplus",
      languageFileName : "c++",
   },
   {
languageName : "ruby",
languageFileName : "rrr",
   }
]
myCoding.forEach ((result) => {
   console.log(result.languageFileName);
})

 const example = ["mango","apple","rasberry"];
 const vegetable =example.forEach ((fruit) => {
   console.log(fruit);
   return fruit
 })
   console.log(vegetable); // ye likh kr return jou hai vo undefined hai//
// basically foreach jou hai vo value return nhi krta //




// filter operation //
//filter bhi call back function leta hai//
// filter value return bhi krta hai and condition bhi daal skte ho and issmein curly braces nhi likhte app//
// curly braces laga kr ap scope start krte ho and tb apko return khud hi lilhna prta hai unlike () jis mein khud hi return hojata hai//
// forst method//
const myNums = [1,2,3,4,5,6,7,8,9,10]
 var myNewNum =myNums.filter((num) => num>3 )
 console.log(myNewNum);

 // 2nd method//
const myNums1 = [1,2,3,4,5,6,7,8,9,10]
 var myNewNum =myNums.filter((num) => {
  return num>3} )
 console.log(myNewNum);

 // 3rd method lakin its lengthy//
 const newNums = []
 myNums.forEach ((nums)=> {
   if(nums>3){
      newNums.push(nums)
   }

 })
console.log(newNums);





const books = [
   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
 ];

 const title = books.filter((bk) =>bk.genre==='Non-Fiction')
  
 console.log(title);



 // map//

 //const myNumbers = [1,2,3,4,5,6,7,8,9]
// const newNums1 =myNumbers.map((num2) =>{return num2 +10})
// console.log(newNums1);




 //chaining
 const myNumbers = [1,2,3,4,5,6,7,8,9]
 const newNums1 =myNumbers
 .map((num) => num*10)
 .map((num) => num +1)
 .filter((num) => num>80) // ye true and false wala scene hota hai //
 console.log(newNums1);

 // reduce //
  const add = [1,2,3,4,5];
 const addMe = add.reduce(function(acc,cuurrvalue){
   console.log(`acc: ${acc} and curvalue ${cuurrvalue}`)
   return acc + cuurrvalue
 },0)
 console.log(addMe);


  const add1 = [1,2,3,4,5];
 const addMe1 = add.reduce(  (acc,cuurrvalue) => acc+cuurrvalue,0)
 
 
const shopingCart = [{
itemName : "js course",

price : 3444,
},
{
   itemName : "py course",

price : 2444,

},
{
   itemName : "rus course",

price : 9444,
}]
const totalValue = shopingCart.reduce ((acc,item) =>acc + item.price,0)
console.log(totalValue);

 
 


