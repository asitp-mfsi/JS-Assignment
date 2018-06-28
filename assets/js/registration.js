/*
function details
check() - check validation of first name , middle name , last name
checktt() - check state of tooltip and change it according to the validation
validateEmail() - validate the email id
phnvalidate() - validate the phone number
optional_Phnvalidate() - validate the optional phone number
dobvalidate() - validate the date of birth
vpassword() - validate the password
repassword() - validate if both the password are same or not
validLocation() - validate the input city , state and country
zipcode() - validate the zip code
checkadd() - validate the line no
convertPassword() - convert password to text
captcha() - call generate() and check the captcha
validCaptcha() - check the answer of the mathematical captcha
generate() - generate captcha
rand() - generate random number
startTime() - start the time
validForm() - validate the total form
*/

var str="",
checkOnSubmit=true;
function check(obj)
{
 var ele=document.getElementById(obj);
 var n=ele.value;
 var reg=/^[A-Za-z]*$/;
 
 if(n == "" || reg.test(n)!=true)
{ 
	var txt="It can't be empty and spaces not allowed.";
  checkOnSubmit=false;
  ele.style.borderColor="red";
  checktt(obj,reg,txt);
}
 else
{
 ele.style.borderColor="green";
 ele.style.backgroundColor="lighyellow";
 ele.style.borderWidths="5px";
 checktt(obj,reg,"");
}
console.log(ele.id);
if(ele.id=='mname' && ele.value=="")
{
	ele.style.borderColor='white';
}	
}
function checktt(obj,reg,txt)
{
 var ele=document.getElementById(obj);
 var nxtid=document.getElementById(obj).nextSibling.nextElementSibling.id;
 if(ele.value!="")
{
  if(reg.test(ele.value)!=false)
 {
   
   document.getElementById(nxtid).innerHTML="&#10004 Correct Input";
 }
 else
 {
	  document.getElementById(nxtid).innerHTML=txt;
 }
}
else
{
	document.getElementById(nxtid).innerHTML=txt;
}
}
function validateEmail(obj){
  var email=document.getElementById(obj);
  var val=email.value;

            var reg = /^([A-Za-z0-9])+([A-Za-z0-9\-\.])*\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(val) == false) 
           {
			   var txt="It should be a valid email id.";
	checkOnSubmit=false;
    email.style.borderColor="red";
	checktt(obj,reg,txt);
           }
   else{
       email.style.borderColor="green";
       email.style.borderWidths="5px";
       checktt(obj,reg,"&#10004 Correct Input");
   }
}
 function phnvalidate(obj)
{
 var ele=document.getElementById(obj);
 var n=ele.value;
 var reg=/(\d)\1{9}/;
 var reg2=/^[0-9]*$/;
 if(n == "" || reg.test(n)==true || n.length!=10 || reg2.test(n)==false)
{
	var txt="It should be a 10 digit number.";
  checkOnSubmit=false;
  ele.style.borderColor="red";
  checktt(obj,reg,txt);
}
 else
{
  ele.style.borderColor="green";
  ele.style.borderWidths="5px";
  checktt(obj,reg,"&#10004 Correct Input");
} 
}
function optional_Phnvalidate(obj)
{
 var ele=document.getElementById(obj);
 var n=ele.value;
 var reg=/(\d)\1{9}/;
 var reg2=/^[0-9]*$/;
 if(n !== "")
 {
 	 if( reg.test(n)==true || n.length!=10 || reg2.test(n)==false)
	{
	var txt="It should be a 10 digit number.";
  checkOnSubmit=false;
  ele.style.borderColor="red";
  checktt(obj,reg,txt);
	}
	else
	{
  ele.style.borderColor="green";
  ele.style.borderWidths="5px";
  checktt(obj,reg,"");
	} 
 }
 else{
	 ele.style.borderColor="white";
 }
}
 function dobvalidate()
{
   var dob=document.getElementById("dob").value;
   var nxtid=document.getElementById("dob").nextSibling.nextElementSibling.id;
   var today=new Date();
   var day=Date.parse(dob);
if(today<=day || isNaN(day)){
	var txt="Input correct date(It cannot be a future date)";
    document.getElementById("dob").style.borderColor="red";
	checkOnSubmit=false;
	document.getElementById(nxtid).innerHTML=txt;
}
else
{
	document.getElementById(nxtid).innerHTML="&#10004 Correct Input";
	document.getElementById("dob").style.borderColor="green";
	document.getElementById("dob").style.borderWidths="5px";
}
}
function vpassword(obj)
{
   var pass=document.getElementById(obj).value;
   var nxtid=document.getElementById(obj).nextSibling.nextElementSibling.id;
  if(pass.length<8)
 {
	 var txt="It should be more than 8 characters.";
    document.getElementById(obj).style.borderColor="red";
	checkOnSubmit=false;
document.getElementById(nxtid).innerHTML=txt;
 }
  else
 { 
	document.getElementById(nxtid).innerHTML="&#10004 Correct Input";
  document.getElementById(obj).style.borderColor="green";
  document.getElementById(obj).style.borderWidths="5px";
 }  
}
 function repassword(obj)
{
   var pass=document.getElementById("pass").value;
   var nxtid=document.getElementById(obj).nextSibling.nextElementSibling.id;
   var passw=document.getElementById("passw").value;
  if(pass!=passw || passw.length==0)
 {
    var txt="Password not matching"
    document.getElementById("passw").style.borderColor="red";
	checkOnSubmit=false;
	document.getElementById(nxtid).innerHTML=txt;
}
  else
 {
	 document.getElementById(nxtid).innerHTML="&#10004 Correct Input";
  document.getElementById("passw").style.borderColor="green";
  document.getElementById("passw").style.borderWidths="5px";
 }
}
function validLocation(obj)
{
	var txt="It can't be empty.";
    var ele=document.getElementById(obj);
 var n=ele.value;
 var reg=/^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/;
 
 if(n == "" || reg.test(n)!=true)
{ 
  ele.style.borderColor="red";
  checkOnSubmit=false;
   checktt(obj,reg,txt);
}
 else
{
  ele.style.borderColor="green";
  ele.style.borderWidths="5px";
  checktt(obj,reg,"");
}
}
function zipcode(obj)
{
	var txt="It can't be empty.";
 var ele=document.getElementById(obj);
 var n=ele.value;
 var reg=/^[0-9]+$/;
 if(n == "" || reg.test(n)!=true || n.length>7 || n==0)
{ 
  checkOnSubmit=false;
  ele.style.borderColor="red";
 checktt(obj,reg,txt);
}
 else
{
  ele.style.borderColor="green";
  ele.style.borderWidths="5px";
  checktt(obj,reg,"");
}
}
function checkadd(obj)
{
	var txt="It can't be empty and should start with a alphabet or integer and should not contain special character except [ / , . \ : ; - ]";
 var ele=document.getElementById(obj);
 var reg=/^([A-Za-z0-9])*([A-Za-z0-9\s\_\-\,\/\:\;])*$/;
 var n=ele.value;
 if(n == "" || reg.test(n)!=true)
{ 
  checkOnSubmit=false;
  ele.style.borderColor="red";
   checktt(obj,reg,txt);

}
 else
{
  ele.style.borderColor="green";
  ele.style.borderWidths="5px";
  checktt(obj,reg,"");
}
}
 function convertPassword(id){
    var x = document.getElementById(id);
    if (x.type === "password"){
        x.type = "text";
   } else{
        x.type = "password";
   }
}function captcha()
 {
	
	 		var c=0;

		while(c==0)
		{
			generate();
			var a=parseInt(str[0]+str[1]);
			var b=parseInt(str[3]+str[4]);
			if(Number.isInteger(+(eval(str))) && a>=b && (a!=0 || b!=0))
			{
				document.getElementById("captcha").innerHTML=str;
				c++;
			}
		}
 }
 function rand(){
	return Math.floor(Math.random() * 100);
}
function generate()
{
	var a=rand();
	var possible="+-*/"
	var d=possible.charAt(Math.floor(Math.random() * 4));
	var b=rand();
	if(d=='*')
	{
		a=a-(a%10);
		b=b-(b%10);
	}
	str=a+d+b; 
}
 function validCaptcha()
  {
	 var getans=document.getElementById("ans").value;
	 if(eval(str) == getans)
	 {
		 alert("Captcha (Successful : Correct answer)");
		 return true;
	 }
	 else
	 {
		 alert("Captcha (Unsuccessful : Incorrect Answer)");
		 return false;
	 }
 }

 function startTime(){
    var today = new Date();
    var h = today.getHours();
	if(h<12)
		document.getElementById('wishes').innerHTML="Good Morning User";
	else if(h>=12 && h<=16)
		document.getElementById('wishes').innerHTML="Good Afternoon User";
	else if(h>=16)
		document.getElementById('wishes').innerHTML="Good Evening User";
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById("clock").innerHTML =
    h + ":" + m 
    var t = setTimeout(startTime, 500);
   var months = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"];
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime()}, 60000);
}
function checkTime(i){
    if (i < 10){i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function navigationFrame(mainFrame,nav)
{
	var ele=document.getElementById(mainFrame);
	var nav=document.getElementById(nav);
	if(nav.innerHTML==="Full Screen")
	{
		ele.style.width="90%";
		ele.style.height="100%";
		nav.innerHTML="Normal";
		nav.style.position="absolute";
		document.getElementById('wishes').style.position="absolute";
		document.getElementById('wishes').style.width="200px";
	}
	else{
		ele.style.width="80%";
		ele.style.height="350px";
		nav.innerHTML="Full Screen";
		nav.style.position="fixed";
		document.getElementById('wishes').style.position="fixed";
	}
}
function validateGender()
{
	var male=document.getElementById('male');
	var female=document.getElementById('female');
	var other=document.getElementById('other');
	if(male.checked==false && female.checked==false && other.checked==false)
	{
		var txt="Select gender";
	checkOnSubmit=false;
	document.getElementById('g1').innerHTML=txt;
	}
	else{
		document.getElementById('g1').innerHTML="selected";
	}
}
function validForm()
{
	checkOnSubmit=true;
	check('fname');
	check('mname');
	check('lname');
	validateEmail('email');
	phnvalidate('lphone');
	optional_Phnvalidate('mphone');
	dobvalidate('dob');
	vpassword('pass');
	repassword('passw');
	checkadd('lineno');
	validLocation('city');
	validLocation('state');
	validLocation('country');
	zipcode('zip');
	if(checkOnSubmit===false)
	{
		alert("Registration Incomplete!!");
		validCaptcha();
		return false;
	}
	else
	{
		var val=validCaptcha();
		return val;
	}
}