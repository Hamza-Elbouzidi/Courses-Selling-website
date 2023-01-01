var Username = document.getElementById('Ui');
var Email = document.getElementById('Ei');
var Password =document.getElementById('P1');
var confirmPass = document.getElementById('P2');
var btn = document.getElementById("butt");

// Les champs que l'utilisateur doit saisie 
var loginusername="hamza";
var loginemail="elbouzidihamza5@gmail.com";
var loginpassword="Hamza2001a,"



// Validation de Password
var upperCase =/[A-Z]/g;
var lowerCase = /[a-z]/g;
var numbers =/[0-9]/g;
var specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// l'appel des spans

var spanUser = document.getElementById('sUi');
var spanEmail = document.getElementById('sEi');
var spanPassword = document.getElementById('sP1');
var spanConfirm = document.getElementById('sP2');

// Validation Username
 function ValideUsername () {
   
if (Username.value =="" || Username.value.length < 3 || Username.value.length >25 )
{
  Username.style.border = " red solid 3.5px"
   
   spanUser.innerHTML='Username doit etre plus de 3 lettre moin de 25 lettre !';
}else{
   spanUser.innerHTML='';
   Username.style.border = " green solid 3.5px"

}
 }

// Validation Email
function ValideEmail(){

if (Email.value !== "" && Email.value.match (validRegex)){
    spanEmail.innerHTML='';
    Email.style.border = " green solid 3.5px"

} else {

   spanEmail.innerHTML='Email doit etre sous la forme de exemple@domain.com';
   Email.style.border ="red solid 3.5px"
}

}

// Validation Password
function ValidePassword (){

   if (Password.value !==""  
&& Password.value.length >= 8 
&& Password.value.match(upperCase)
&& Password.value.match(lowerCase)
&& Password.value.match(numbers)&& Password.value.match(specialChars)){
   
   Password.style.border = " green solid 3.5px"
   spanPassword.innerHTML='';

    
}else {
   spanPassword.innerHTML='Le mot de Passe doit etre plus de 8 caractere contient (A-a-1-/';
  Password.style.border="red solid 3.5px"
}
 

}

//Validation Confirm password
function ValideConfirm (){
   if (confirmPass.value == Password.value){
   spanConfirm.innerHTML='';
   confirmPass.style.border = " green solid 3.5px"
}else{
   spanConfirm.innerHTML='Saisir le meme mot de passe !';
  confirmPass.style.border='red solid 3.5px'
}
 

}

// Verification des champs que sa soit juste !!

function Signup (){

   if(Username.value==loginusername && Email.value==loginemail && Password.value==loginpassword){
   window.location.href = "Menu.html";

}else if (Username.value="" || Email.value=="" || Password.value=="") {
  alert('Veuillez Remplir vos informations')
}else{
   alert('Les informations Saisis sont pas enregitres N existepas')
}

}

// Validation en cours de l'ecriture 

document.getElementById('Ui').addEventListener("input",ValideUsername)
document.getElementById('Ei').addEventListener("input",ValideEmail)
document.getElementById('P1').addEventListener("input",ValidePassword)
document.getElementById('P2').addEventListener("input",ValideConfirm)




