document.getElementById('add-money').addEventListener('click',function(){
    document.getElementById('addmoney-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
});




document.getElementById('cash-out').addEventListener('click',function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('addmoney-form').classList.add('hidden');
});