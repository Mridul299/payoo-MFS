document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    if(pinNumber === '1234' && phoneNumber === '01786104945'){
        window.location.href="./home.html";
    }
    else{
        const messeage = "wrong phone number or wrong pin number";
        const p = document.getElementById("wrong-pin");
        p.innerText = messeage;
        
    };
   

});