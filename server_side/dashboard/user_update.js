function Update_Fields_inDocument(){
    cloudDB.collection('DRIVER').doc('0696588062').update({
        FirstName : document.getElementById('firstnameSetting'),
        SurName: document.getElementById('surnameSetting'),
        PASSWORD: document.getElementById('passwordSetting')
    })
    .then(function(){
        console.log("Document written with id");
    })
    .catch(function(error){
        console.error("error adding document" , error);
    })
}

