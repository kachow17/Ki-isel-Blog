function formValidation()
{
var upn = document.registration.phone_number;
var uname = document.registration.username;
var usurname = document.registration.surname;
var ucountry = document.registration.country;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex;

if(allLetter(uname))
{
    if(allLetterr(usurname))
    {   
        
if(ValidateEmail(uemail))
{        
if(userid_validation(upn,9,11))
{
 
if(countryselect(ucountry))
{

if(validsex(umsex,ufsex))
{

}
} 
}
} 
}
}

return false;

} 

function userid_validation(upn,mx,my)
{
var upn_len = upn.value.length;
if (upn_len == 0 || upn_len >= my || upn_len < mx)
{
alert("Telefon numarası 10 basamaktan oluşmalıdır");
upn.focus();
return false;
}
var numbers = /^[0-9]+$/;
if(upn.value.match(numbers))
{
return true;
}
else
{
alert('Telefon numarası sayılardan oluşmalıdır');
uzip.focus();
return false;
}


}

function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Ad kısmı boş kalamaz /Ad da yalnızca harf kullanılabilinir ');
uname.focus();
return false;
}
}

function allLetterr(usurname)
{ 
var letters = /^[A-Za-z]+$/;
if(usurname.value.match(letters))
{
return true;
}
else
{
alert('Soyad kısmı boş kalamaz /Soyad da yalnızca harf kullanılabilinir ');
usurname.focus();
return false;
}
}


function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Ülkenizi giriniz');
ucountry.focus();
return false;
}
else
{
return true;
}
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("Geçersiz bir adres girdiniz!");
uemail.focus();
return false;
}

} function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Cinsiyetinizi giriniz');
umsex.focus();
return false;
}
else
{



const name = document.getElementById('username').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phoneNo = document.getElementById('phoneNo').value;
    const country = document.registration.country.value;
    const mesaj = document.getElementById('mesaj').value;
   var languages="";
    
    if(document.getElementById('cPlus').checked){
        languages+= document.getElementById('cPlus').value;
    }
    if(document.getElementById('csharp').checked){
        languages+= ", "+ document.getElementById('csharp').value ;
    }
   if(document.getElementById('java').checked){

    languages+= ", "+ document.getElementById('java').value;
   }
    if(document.getElementById('python').checked)
    languages+= ", "+ document.getElementById('python').value;

   console.log(country);
var cinsiyet;
if(document.getElementById('erkek').checked){
cinsiyet=document.getElementById('erkek').value;
}
if(document.getElementById('kadin').checked){
    cinsiyet=document.getElementById('kadin').value;
    }

    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("SURNAME", surname);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("PHONNO", phoneNo);
    sessionStorage.setItem("COUNTRY", country);
    sessionStorage.setItem("MESAJ", mesaj);
    sessionStorage.setItem("LANGUES", languages);
    sessionStorage.setItem("CINSIYET", cinsiyet);

    alert('Form başarılı bir şekilde gönderildi');
    window.location.replace("Gonderiler.html");

  
return true;
}
}


function clearFunc()
	{ 
        upn.value="";
         uname.value="";
         usurname.value="";
         uemail.value="";
         umsex.value="";
         ufsex.value="";
	}

