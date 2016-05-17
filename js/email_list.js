
function checkEmail()
{
var email1 = document.getElementById('email_address1'); 
var email2 = document.getElementById('email_address2');     
var elMsg = document.getElementById('email_address1_error');

if(this.value.length < 5 )
{
elMsg.textContent = '';
    }else{
    elMsg.textContent = 'Both entried Emails must be matched';
    }    
}
        
var elEmail = document.getElementById('email_address2');
        //when it loses focus call checkEmail() function        
//1. elUserName.onblur = checkEmail;
        //use the event listener
        //2. elUserName.addEventListener('blur', checkEmail, false);
        elEmail.addEventListener('blur', checkEmail, false);
//false is optional in this case, both same result.


  ///////////////////
       
              
        
