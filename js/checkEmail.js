    function checkEmail()
{
var email1 = document.getElementById('email_address1').value;
var email2 = document.getElementById('email_address2').value;	
var elMsg = document.getElementById('email_address1_error');

if(this.email1.value != this.email2.value){
elMsg.textContent = '&#9785; Your entried emails does not matched';
    }else{
    elMsg.textContent = '';
    }    
}
        
var elEmail = document.getElementById('first_name');
 elEmail.addEventListener('blur', checkEmail, false);