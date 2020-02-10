alert("hello");
console.log('this is a test $[]{}1222')
console.log(12)
let statement="elahe"
console.log(statement)
let num1=parseInt(prompt("please enter num1"));
console.log(num1);
let num2=parseInt(prompt("please enter num2"));
console.log(num2+num1);
let num = parseInt(prompt("please enetr num"));
// if(num>0){
//     alert("+")
// }else if(num<0){
//     alert("-")
// }else{
//     alert("!")
// }
 num>0 ? alert("+"):alert("-");
 if(num>0) 
 alert("+")
  else alert("-");
//   function max(...number){
//       let result = -Infinity;
//       for(let number of number)
//       {
//           if(number>result) result=number
//       }
//       return result;
//   }
// alert(max(1,50))
let data= {name:"elahe",family:"khalili",age:"21"}
let {family }=data
console.log(family);
class person{
    constructor(name,family){
        this.name=name;
        this.family=family;
    }
    sayhello()
    {
      console.log(`Hello  ${this.name}   ${this.family}`)  
    }
    
}
let ali = new person("ali ahmadi")
ali.sayhello();
console.log(ali.family);
class person{
    constructor(name,family){
        this.name=name;
        this.family=family;
    }
    GetFullname(){
        return `${this.name}   ${this.family}`

    }
}  
class student extends person{}
class teacher extends person{}  
/*  ers bari  */