phoneNumber = phoneNumber = localStorage.getItem('textvalue');
console.log(phoneNumber);






/*cloudDB.collection("DRIVER").doc(phoneNumber).collection("CARS").get()
.then(querySnapshot => {
    querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
        
    });
});*/




function addRow(){
    
    let table = document.getElementById('carsTable');
    let template='' ;
    

    cloudDB.collection("DRIVER").doc(phoneNumber).collection("CARS").get()
    .then(querySnapshot => {
    querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
        cloudDB.collection(CAR_FIRESTORE_COLLECTION_NAME).doc(doc.id).get()
        .then(function(doc)
        {
            if(doc.exists)
            {
                    carMarque = doc.data().marque;
                    carModele = doc.data().modele;
                    carMatricule = doc.data().matricule;
                    cars.push(doc.id);
                    console.log('seccess firestore ' +carModele+' '+carMarque);
                    template +=`
                        <tr>
                            <td> ${carMatricule} </td>
                            <td> ${carMarque} </td>
                            <td> ${carModele} </td>
                            <td> ${doc.id} </td>                                                    
                            <td class="options"><img src="../../assets/icons/menu.svg" alt="options" onclick ="selectedRow()";></td>
                        </tr>
                    `;                                                                          //onclick ="selectedRow()";
                    table.innerHTML += template;
                    template ='';
            }
        });
        
    });
});



}
addRow();



/*
function addRow(){
    
    let table = document.getElementById('carsTable');
    let template='' ;
    do
    {
        cloudDB.collection(CAR_FIRESTORE_COLLECTION_NAME).doc(cars[j]).get()
        .then(function(doc)
        {
            if(doc.exists)
            {
                    carMarque = doc.data().marque;
                    carModele = doc.data().modele;
                    carMatricule = doc.data().matricule;
                    console.log('seccess firestore ' +carModele+' '+carMarque);
                    template +=`
                        <tr>
                            <td> ${carMatricule} </td>
                            <td> ${carMarque} </td>
                            <td> ${carModele} </td>
                            <td> ${cars[j]} </td>
                            <td class="options"><img src="../../assets/icons/menu.svg" alt="options" onclick ="selectedRow()";></td>
                        </tr>
                    `;
                    table.innerHTML += template;
                    template ='';
            }
        });
        j++;
    }while(j < 2);
}
addRow();

*/