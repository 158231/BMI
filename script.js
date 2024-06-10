//BMI
const height=document.getElementById("height");
const calculate=document.getElementById("calculate");
const result=document.getElementById("result");
console.dir(calculate);
console.log(height);
console.dir(height);
console.log(height.valueAsNumber);
const weight=document.getElementById("weight");
console.log(weight.valueAsNumber);
let a=10.5555;
console.log(a.toFixed(0));

function BMI(details){
    console.log(details);
    let height1=height.valueAsNumber;
    let weight1=weight.valueAsNumber;
    let BMI1=weight1/(height1**2);
    result.innerHTML=`${BMI1.toFixed(2)}`;
    // box-shadow: 5px 5px 10px 5px blue;


}


calculate.addEventListener("click",BMI);






