function Update_Fields_inDocument(){
    cloudDB.collection('CAR').doc(carPhoneNumber).update({
        Marque : marque,
        Modele : modele,
        Matricule : matricule,
        Password : carPassword
    })
    .then(function(){
        console.log("Document written with id" , rollV);
    })
    .catch(function(error){
        console.error("error adding document" , error);
    })
}




/*document.getElementById('updateBtn').onclick = function(){
    Update_Fields_inDocument();         
}*/