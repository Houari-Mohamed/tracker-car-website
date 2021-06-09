phoneNumber = phoneNumber = localStorage.getItem('textvalue');
console.log(phoneNumber);

function Retreive_Data_From_Document(){
    cloudDB.collection('DRIVER').doc(phoneNumber).get()
    .then(function(doc){
        if(doc.exists){
            console.log(doc.data().FirstName+'  '+doc.data().SurName+'  '+ doc.data().PASSWORD);
            document.getElementById('firstnameSetting').value = doc.data().FirstName;
            document.getElementById('surnameSetting').value = doc.data().SurName;
            document.getElementById('passwordSetting').value = doc.data().PASSWORD;
            document.getElementById('phoneSetting').value = phoneNumber;
        }
        else{
            console.log("doc does not exixst");
        }
    });
}

Retreive_Data_From_Document();