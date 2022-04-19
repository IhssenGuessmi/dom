var total=document.querySelector('.total')
var plusButtons=Array.from(document.querySelectorAll('.button-plus'));
var minusButtons=Array.from(document.querySelectorAll('.button-minus'));
var removeButtons=Array.from(document.querySelectorAll('.close'));
var finalPrice=document.querySelector('.finPrice')
var shipping=document.querySelector('.delivery')
var quantities=Array.from(document.querySelectorAll('.quantity'));
var unitePrices=Array.from(document.querySelectorAll('.unite-price'));

function totalPrice(){
    quantities=Array.from(document.querySelectorAll('.quantity'));
    unitePrices=Array.from(document.querySelectorAll('.unite-price'));
    var sum=0;
    for (let  i=0;i<quantities.length;i++){
        sum=sum + unitePrices[i].innerText * quantities[i].innerText;
    }
    total.innerText=sum
    finalPrice.innerText=sum +5
}

for (let i=0;i<plusButtons.length;i++){
    plusButtons[i].addEventListener('click',function(){
        quantities[i].innerText++;
        totalPrice();
    });
    minusButtons[i].addEventListener('click',function(){
        if(quantities[i].innerText>0) {
            quantities[i].innerText--;
            totalPrice();
        }
    });
}

for (let removeButton of removeButtons){
    removeButton.addEventListener('click',function(){
        removeButton.parentNode.parentNode.remove();
        totalPrice();
        plusButtons=Array.from(document.querySelectorAll('.button-plus'));
         minusButtons=Array.from(document.querySelectorAll('.button-minus'));
    })
}