const totalAmount= document.getElementById('total-amount')
 totalAmount.addEventListener('click',function(event){

const inputAmount1 =parseFloat(document.getElementById('input-amount1').value)|| 0;
const inputAmount2 =parseFloat(document.getElementById('input-amount2').value)|| 0;
const amountH2=parseFloat(document.getElementById('amount-money').innerText)|| 0;





let inputTotal = inputAmount1 + inputAmount2 ;


 let total=inputTotal + amountH2 ;



document.getElementById('amount-money').innerText=total.toFixed(2);

event.preventDefault()


 });


