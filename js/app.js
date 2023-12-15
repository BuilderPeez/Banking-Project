var user = document.getElementById('userId');
var account = document.getElementById('acctNum');
const userSucc = document.querySelector('#userSuccess');
const userErr = document.querySelector('#userError');
const acctSucc = document.querySelector('#acctSuccess');
const acctErr = document.querySelector('#acctError');
var acctName = document.getElementById('useId');
var acctNo = document.getElementById('acct');
var form = document.getElementById('bForm');


function Validate(){
    if(account.value.length !== 10){
        acctErr.textContent = 'Account number must be 10 digits'
        acctSucc.textContent = "";
        // return false
    }else{
        acctSucc.textContent = "Valid Account";
        acctErr.textContent = '';
        
        // return true
    }
    if(user.value.length == ""){
       userErr.textContent = 'Please enter a User ID'
       userSucc.textContent = ''
    //    return false
    }else{
        userSucc.textContent = 'Valid User ID'
        userErr.textContent = ''
        // return true
    }
    
   
   
    if (account.value.length === 10 && user.value.lenghth !== ''){
        var name = user.value;
        var acct = account.value;
    
        var formData = {name: name, acct: acct};
    
        localStorage.setItem('formData', JSON.stringify(formData));
        window.location.href = "output.html";
        // return true
    }
    
}

// function submitForm() {
//    if(!Validate()) 
   
//    {
//     return;
//    }
   
//     var name = user.value;
//     var acct = account.value;

//     var formData = {name: name, acct: acct};

//     localStorage.setItem('formData', JSON.stringify(formData));
// }
// if (account.value.length === 10 && user.value.lenghth !== ''){
//     window.location.href = "output.html";
//     // return true
// }
// document.addEventListener('DOMContentLoaded', () => {
//     var storedData = localStorage.getItem('formData');

//     if (storedData) {
//         var formData = JSON.parse(storedData);

        
//         var acctName = document.getElementById('useId');
//         var acctNo = document.getElementById('acct');
//         acctName.innerHTML = formData.name
//         acctNo.innerHTML = formData.acct
//     }
// })