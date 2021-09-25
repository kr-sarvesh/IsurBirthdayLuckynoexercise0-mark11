const dateOfBirth= document.querySelector("#date-of-birth")
const luckyNumber =document.querySelector("#lucky-number")
const checkNumberButton = document.querySelector("#check-number")
const outputBox= document.querySelector("#output-box");

const compareValues=(sum,luckyNumber)=>{
  if(sum%luckyNumber===0){
    outputBox.innerText="You are lucky,Dude"
  }
  else{
    outputBox.innerText ="Sorry Dude you are not lucky"
  }
}


const checkNumberIsLucky = () => {
const dob =dateOfBirth.value;
const sum = calculateSum(dob);
if(sum && dob)
compareValues(sum,luckyNumber.value)
else
outputBox.innerText="Please do enter both values"
}

const calculateSum = (dob) =>{
dob= dob.replaceAll("-","")
let sum=0;
for(var i =0 ;i<dob.length;i++){
sum= sum + Number(dob.charAt(i));
}
return sum;
}


checkNumberButton.addEventListener("click",checkNumberIsLucky)
