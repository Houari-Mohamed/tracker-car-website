let firstNameT , passwordT , phoneNumberT , surNameT , confirmPasswordT;
let firstName=null , password=null  , phoneNumber=null , surName=null , confirmPassword=null;
//let carModele='1' , carMatricule='1' , carMarque='1' , carPhone='106', carPassword ;
//var cars =['0551964835' , '0776869329'];
//var j=0;



var special_char = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var digets = /0123456789/;
var upper_case = /ABCDEFGHIJKLMNOPQRSTUVWXYZ/;

const DRIVER_FIRESTORE_COLLECTION_NAME ='DRIVER';
const CAR_FIRESTORE_COLLECTION_NAME ='CAR';

    
const FIRST_NAME_SIGN_UP_ID = 'firstName';
const SUR_NAME_SIGN_UP_ID = 'surName';
const PHONE_NUMBER_SIGN_UP_ID='phoneNumber';
const PASSWORD_SIGN_UP_ID='password1';         
const SIGN_UP_BUTTON_ID='sign_up_btn'; 


const SIGN_IN_BUTTON_ID = 'sign_in_btn';
const PHONE_NUMBER_SIGN_IN_ID='phoneNumber2';
const PASSWORD_SIGN_IN_ID='password3'; 