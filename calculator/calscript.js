const counters=document.querySelectorAll('.counter')

counters.forEach((counter)=>{
counter.innerHTML=0;
const Updatecoun=()=>{
    const target=counter.getAttribute('data-target')
    const start=Number(counter.innerHTML);
    const incr=target/100;
   if(target>start){
       counter.innerHTML=`${Math.round(start+incr)}`;
      setTimeout(Updatecoun,2000)    
      }
        else{
        counter.innerHTML=target;
    }
    
}
Updatecoun();



}
)








const tempload=()=>{
    let qwe=document.getElementById('temp')
    qwe.innerHTML="ADDITION";
    qwe.style.color="#D63031";
  setTimeout(() => {
     qwe.innerHTML="SUBTRACTION" 
  }, 2000);
setTimeout(() => {
   qwe.innerHTML="MUTIPLICATION"
    
}, 3000);
setTimeout(()=>{
    qwe.innerHTML="DIVISION";
    qwe.style.color="#f8b627";
},4000)
}
tempload();
setInterval(tempload, 5000);



const calculator=()=>{
const numbercal1=document.getElementById('calc1').value;
const numbercal2=document.getElementById('calc2').value;
const optselected=document.getElementById('cal_diff')
const valuecal=cal_diff.options[optselected.selectedIndex].value;

const addition=(a,b)=>{
let plus=parseInt(a)+parseInt(b);
return plus;
}
const subtraction=(a,b)=>{
    let minus=parseInt(a)-parseInt(b);
     return minus;
    
}
const multiplication=(a,b)=>{
    let com=parseInt(a)*parseInt(b);
     return com;
    
}
const division=(a,b)=>{
    let com1=parseInt(a)/parseInt(b);
     return com1;
    
}

let result;
if(valuecal=='add')
{
    result=addition(numbercal1,numbercal2);
    //console.log(result);
   document.getElementById('endresult').innerHTML=`${result} additon result`;
}
if(valuecal=='sub')
{

    result=subtraction(numbercal1,numbercal2);
    document.getElementById('endresult').innerHTML=`${result} subtraction result`;

}
if (valuecal=='multi') {
    result=multiplication(numbercal1,numbercal2);
    document.getElementById('endresult').innerHTML=`${result} Multiplication result`;

}
if(valuecal=='divi'){
    result=division(numbercal1,numbercal2);
    document.getElementById('endresult').innerHTML=`${result} division result`;
 
}

}