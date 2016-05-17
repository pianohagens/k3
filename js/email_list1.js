/*
*Use DOM methods to validate the form fields, including checking for empty fields on all fields and checking that the two email addresses entered match.See the screenshots for specification of the required program behavior.
*Use the starter HTML and CSS code provided. You will need to make a Success.html file to display the success page.
*Note: Using HTML 5 validatation will NOT be awarded points towards solving this assignment.
*Hint: Consider using the following DOM properties and methods: firstChild, nodeValue, value and submit()
*/
var $= function(id){ return document.getElementById(id);}

var joinList = function () {
    //get the value of the email address fields
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value; 
    var lastName = $("last_name").value;
    var isValid = true;
    var error1 = "This field is required";
	
	// validate the entries
	// add your code here
   
    if (emailAddress1 == ""){
     var elError1 = $("email_address1_error"); elError1.childNodes[0].nodeValue = error1;
     isValid = false;
    }
    
    if (emailAddress2 == ""){
     var elError1 = $("email_address2_error"); elError1.childNodes[0].nodeValue = error1;
     isValid = false;
    }

    if (emailAddress1 !== emailAddress2){
        var error2 = "\u2639 This entry must equal first entry"; 
        var elError2 = $("email_address2_error"); 
        elError2.childNodes[0].nodeValue = error2;
        isValid = false;
    }
    
    if (firstName == ""){
     var elError1 = $("first_name_error"); elError1.childNodes[0].nodeValue = error1;
     isValid = false;
    }
     
    if (lastName == ""){
     var elError1 = $("last_name_error"); elError1.childNodes[0].nodeValue = error1;
     isValid = false;
    }
    
	// submit the form if all entries are valid
	if (isValid) {
		$("email_form").submit(); 
	}
}

window.onload = function () {
    $("join_list").onclick = joinList;
    $("email_address1").focus();  
} 
