   
function validation()
{
    var testuser = document.getElementById('user').value;
    var testpass = document.getElementById('pass').value;
    var testconfirmpass = document.getElementById('conpass').value;
    var testmobileNumber = document.getElementById('mobileNumber').value;
    var testemails = document.getElementById('emails').value;
    if(testuser == "")
    {
        document.getElementById('username').innerHTML="** Veuillez remplir le champ du nom d'utilisateur";
        return false;
    }

    if((testuser.length <= 2) || (testuser.length >= 20))
    {
        document.getElementById('username').innerHTML=" ** La longueur de l'utilisateur doit être comprise entre 2 et 20";
        return false;
    }
  

    if(!isNaN(testuser))
    {
        document.getElementById('username').innerHTML=
        " ** Seuls les caractères sont autorisés";
        return false;
    }



    if(testpass == "")
    {
        document.getElementById('passwords').innerHTML="** Veuillez remplir le champ du mot de passe";
        return false;
    }


    if((testpass.length <= 8) || (testpass.length > 20))
    {
        document.getElementById('passwords').innerHTML=" ** La longueur du mot de passe doit être comprise entre 8 et 20";
        return false;
    }


    if(testconfirmpass == "")
    {
        document.getElementById('confrmpass').innerHTML="** Veuillez remplir le champ de confirmation du mot de passe";
        return false;
    }
    if(testpass != testconfirmpass)
    {
        document.getElementById('confrmpass').innerHTML=
        "** Le mot de passe ne correspond pas";
        return false;
    }



    if(testmobileNumber == "")
    {
        document.getElementById('mobileno').innerHTML="** Veuillez remplir le champ du numéro de mobile";
        return false;
    }
    if(testemails == "")
    {
        document.getElementById('emailids').innerHTML="** Veuillez remplir le champ e-mail";
        return false;
    }

}
