function Retreive_Data_From_Document(){
    cloudDB.collection('CAR').doc('041770076').get()
    .then(function(doc){
        if(doc.exists){
            modeleteT.value = doc.data().Modele;
            marqueT.value = doc.data().Marque;
            matricueT.value = doc.data().Matricule;
            carPassT.value = doc.data().Password;
            console.log(doc.data().Modele+'  '+doc.data().Marque+'  '+ doc.data().Matricule+'  '+ doc.data().Password);
        }
        else{
            console.log("doc does not exixst");
        }
    });
    //.catch(function(error){
    //    console.error("error adding document", error);
    //})
}

Retreive_Data_From_Document();