firstNameT = document.getElementById('firstName');
surNameT = document.getElementById('surName');
phoneNumberT = document.getElementById('phoneNumber');
passwordT = document.getElementById('password1');
confirmPasswordT = document.getElementById('password2');


firstName = firstNameT.value;
surName = surNameT.value;
phoneNumber = phoneNumberT.value;
password = phoneNumberT.value;

/*
function Update(val , type){
    if(type == 'fname') firstName = val;
    else if (type == 'sname') surName = val;
    else if (type == 'pass1') password = val;
    else if (type == 'phone') phoneNumber = val;
    else if (type == 'phone2') phoneNumber = val;
    else if (type == 'pass3') password = val;
}*/





function Update(val , type){
    if(type == 'fname') {
        firstName = val;
    }


    else if (type == 'sname') {
        surName = val;
    }
    
    
    else if (type == 'pass1') {
        password = val;
        if(password.length < 8)
        {
           // document.getElementById('controls_length').classList.add('notdone');
           document.getElementById('controls_length').className = 'notdone';
        } 
        else
        {
            if(password.length >= 8){
            //    document.getElementById('controls_length').classList.add('done');
                document.getElementById('controls_length').className = 'done';
            }
        }

        
        if(special_char.test(password)){
            document.getElementById('controls_special_char').className = 'done';
        }else{
            document.getElementById('controls_special_char').className = 'notdone';
        }

        if(upper_case.test(password)){
            document.getElementById('controls_uppercase').className = 'done';
        }else{
            document.getElementById('controls_uppercase').className = 'notdone';
        }


        if(digets.test(password)){
            document.getElementById('controls_digits').className = 'done';
        }else{
            document.getElementById('controls_digits').className = 'notdone';
        }


        if(confirmPassword != password){
            document.getElementById('controls_equal').className = 'notdone';
        }else{
            document.getElementById('controls_equal').className = 'done';
        }
    }
    
    
    else if (type == 'phone') {
        phoneNumber = val;
        if(!phoneNumber.startsWith('+')){
            alert('ERROR ,Incorrect phone number');
        }
    }
    
    
    else if (type == 'pass2') {
        confirmPassword = val;
        if(confirmPassword.length < 8 )
        {
            document.getElementById('controls_length').className = 'notdone';
        } 
        else
        {
            if(confirmPassword.length >= 8){
                document.getElementById('controls_length').className = 'done';
            }
        }
        if(confirmPassword != password){
            document.getElementById('controls_equal').className = 'notdone';
        }else{
            document.getElementById('controls_equal').className = 'done';
        }
    }


    else if (type == 'phone2') {
        phoneNumber = val;
        if(!phoneNumber.startsWith('+')){
            alert('ERROR ,Incorrect phone number (must begin with +)');
        }
    }


    else if (type == 'pass3') {
        password = val;
    }
}



