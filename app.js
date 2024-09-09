function registrationForm(){
    let Name = document.getElementById('name').value
    let  Contact= document.getElementById('contact').value
    let Email = document.getElementById('email').value
    let Password = document.getElementById('password').value
    let Confirm_Password = document.getElementById('conf_pass').value
    
    if(Name==""||Contact==""||Email==""|| Password==""||Confirm_Password==""){
        alert("All Field are Mandatory to fill")
        return false;
    }
    else if(Contact.length>10 || Contact.length<10){
        alert("Number should be out of 10 digits")
        return false;
    }
    else if(isNaN(Contact)){
        alert("Enter the digits in numbers")
        return false;
    }
    else if(Confirm_Password!=Password){
        alert("Enter the same password")
        return false;
    }
    else{
        return true;
    }
    }

