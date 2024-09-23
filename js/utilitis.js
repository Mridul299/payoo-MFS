function inputvalue(id){
    const recivemoney = document.getElementById(id).value;
    const newrecivemoney = parseFloat(recivemoney);
    return newrecivemoney;
};

function accountbalance(id){
    const textvalue = document.getElementById(id).innerText;
    const textnumber = parseFloat(textvalue);
    return textnumber;
};
function showformbyid(id){
    document.getElementById('addmoney-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transacition-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
};

