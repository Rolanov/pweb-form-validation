function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var uemail = document.registration.email;
{
if(userid_validation(uid,5,10)){
    
}
if(passid_validation(passid,7,12))
{
    if(allLetter(uname))
    {
    if(alphanumeric(uadd))
    { 
    if(countryselect(ucountry))
    {
    if(allnumeric(uzip))
    {
    if(ValidateEmail(uemail))
    {
    if(validsex(umsex,ufsex))
    {
    }
    } 
    }
    } 
    }
    }
    }
}
return false;

} function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User id harus diisi antara "+mx+" hingga "+my+" karakter");
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password harus diisi antara "+mx+" to "+my+" karakter");
passid.focus();
return false;
}
return true;
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
alert('Username hanya boleh mengandung karakter alfabet');
uname.focus();
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
alert('Form berhasil terkirim!');
window.location.reload()
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}