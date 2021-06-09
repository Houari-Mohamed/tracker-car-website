/*phoneNumber = phoneNumber = localStorage.getItem('textvalue');
console.log(phoneNumber);
*/
/*

cloudDB.collection("DRIVER").doc(phoneNumber).collection("CARS").get()
.then(querySnapshot => {
    querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
        cars.push(doc.id);
        
    });
});

*/


function car_detail(carphone){
    
    let positionsTable = document.getElementById('carPositions');
    let table = document.getElementById('carDetails');
    table.innerHTML = '';
    let template=''  , positions='';
    cloudDB.collection(CAR_FIRESTORE_COLLECTION_NAME).doc(carphone).get()
        .then(function(doc)
        {
            if(doc.exists)
            {
                    carMarque = doc.data().marque;
                    carModele = doc.data().modele;
                    carMatricule = doc.data().matricule;
                    carPassword = doc.data().password;
                    console.log('seccess firestore ' +carModele+' '+carMarque);
                    template =`

                    <tr>
                        <th>mark</th>
                            <td>${carMarque}</td>
                    </tr>
                    <tr>
                        <th>model</th>
                            <td>${carModele}</td>
                    </tr>
                    <tr>
                        <th>N<sup>o</sup></th>
                            <td>${carphone}</td>
                    </tr>
                    <tr>
                        <th>register</th>
                            <td>${carMatricule}</td>
                    </tr>
                    `;
                    table.innerHTML = template;
                    template ='';
                    //table.innerHTML += template;
                    //template ='';
                    //<tr>
                      //  <th>Code</th>
                        //    <td>${carPassword}</td>
                    //</tr>

                    cloudDB.collection("CAR").doc(carphone).collection("POSITIONS").get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            console.log('id'+doc.id+doc.data().latitude+' '+ doc.data().longitude)
                        positions += `
                            <tr>
                                <th>${doc.id}</th>
                                    <td>${doc.data().latitude , doc.data().longitude}</td>
                            </tr>
                        `;    
                            //console.log(doc.id, " => ", doc.data());
                        })
                    })



                    positionsTable.innerHTML = template;
                    positions='';
            }
        });
}






