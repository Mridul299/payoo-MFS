document.getElementById("btn-addmoney").addEventListener('click',function(event){
    event.preventDefault();
    const addmoney = inputvalue("add-amount-number");
    const pinnumber = inputvalue("add-pin-number");
    if(pinnumber === 1234 && addmoney >= 0){
        const balance = accountbalance("av-balance");
        const newtotalbalance = balance + addmoney;
        document.getElementById("av-balance").innerText = newtotalbalance;
        document.getElementById("add-amount-number").value = '';
        document.getElementById("add-pin-number").value = '';
        // const p = document.createElement('p');
        // p.innerText = `Added: ${addmoney}Tk new total balance: ${newtotalbalance}Tk.`;
        // document.getElementById('transacition-history').appendChild(p);
        const div = document.createElement('div');
        div.classList.add('bg-slate-300');
        div.innerHTML = `
        <h3 class="font-bold text-center text-green-700">Add money</h3>
        <p class="text-lg text-slate-700"> Balance added ${addmoney} TK current balance is ${newtotalbalance} Tk
        
        `;
        document.getElementById('transacition-con').appendChild(div);
    }
    else{
        alert('please input something valid');
    }
});
document.getElementById("btn-cashout").addEventListener('click',function(event){
    event.preventDefault();
    const cashout = inputvalue("cashout-amount-number");
    const cashoutpin = inputvalue("pin-number");
    if(cashoutpin === 1234 && cashout >0){
        const nowbalance = accountbalance("av-balance");
        const nowTotalBalance = nowbalance - cashout;
        document.getElementById("av-balance").innerText = nowTotalBalance;

        document.getElementById("cashout-amount-number").value = '';
        document.getElementById("pin-number").value = '';

        const div = document.createElement('div');
        div.classList.add('bg-slate-300');
        div.innerHTML = `
        <h3 class="font-bold text-center text-red-700">CashOut</h3>
        <p class="text-lg text-slate-700">CashOut balance ${cashout} TK avableable balance is ${nowTotalBalance} Tk
        
        `;
        document.getElementById('transacition-con').appendChild(div);

    }
    else{
        alert('something wrong');
    };
});
document.getElementById('add-money').addEventListener('click',function(){
    showformbyid("addmoney-form");
});
document.getElementById('cash-out').addEventListener('click',function(){
    showformbyid("cashout-form");
});
document.getElementById('Transaction').addEventListener('click',function(){
    showformbyid("transacition-history");
});

