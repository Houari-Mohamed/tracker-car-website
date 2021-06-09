marqueT = document.getElementById('carMarque');
modeleT = document.getElementById('carModele');
carPhoneNumberT = document.getElementById('carPhoneNumber');
matriculeT = document.getElementById('carMatricule');
carPassT = document.getElementById('carPass1');


marque = marqueT.value;
modele= modeleT.value;
matricule = matricueT.value;
carPhoneNumber = carPhoneNumberT.value;
carPassword = carPassT.value;



function Update(val , type){
    if(type == 'marque') marque = val;
    else if (type == 'modele') modele = val;
    else if (type == 'carPhone') carPhoneNumber = val;
    else if (type == 'carPass1') carPassword = val;
    else if (type == 'carPass2') carPassword = val;
    else if (type == 'matricule') matricule = val;
}