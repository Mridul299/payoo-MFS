document.getElementById('add-money').addEventListener('click',function(){
    document.getElementById('addmoney-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');



});

document.getElementById("btn-addmoney").addEventListener('click',function(event){
    event.preventDefault();
    const pininput = document.getElementById("add-pin-number").value;
    const amountinput = document.getElementById("add-amount-number").value;
    const addbalance = parseFloat(amountinput);
    const balance = document.getElementById("av-balance").innerText;
    const balanceNumber = parseFloat(balance);

    if(pininput === '1234' && amountinput >= '0' ){
        const newbalance = balanceNumber + addbalance;
        document.getElementById("av-balance").innerText = newbalance;
        document.getElementById("add-amount-number").value = '';
        document.getElementById("add-pin-number").value = '';

    }
    else{
        alert('please input something valid');
    }
    
});



document.getElementById('cash-out').addEventListener('click',function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('addmoney-form').classList.add('hidden');
});

document.getElementById("btn-cashout").addEventListener('click',function(event){
    event.preventDefault();
    const pininput = document.getElementById("pin-number").value;
    const amountinput = document.getElementById("cashout-amount-number").value;
    const addbalance = parseFloat(amountinput);
    const balance = document.getElementById("av-balance").innerText;
    const balanceNumber = parseFloat(balance);

    if(pininput === '1234'){
        const newbalance = balanceNumber - addbalance;
        document.getElementById("av-balance").innerText = newbalance;
        document.getElementById("pin-number").value = '';
        document.getElementById("cashout-amount-number").value = '';
    }
    else{
        alert('please input something valid');
    };

    if(addbalance <= balanceNumber){
        const newbalance = balanceNumber - addbalance;
        document.getElementById("av-balance").innerText = newbalance;
    }
    else{
        alert('insuficent balance');
    };
    
});
