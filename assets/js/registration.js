var a,b,d,str;
function check(obj)
{
	var ele=document.getElementById(obj.id);
	var n=ele.value;
	var reg=/^[A-Za-z]*$/;
	
	if(n == "" || reg.test(n)!=true)
	{
		
		ele.value="Invalid";
		ele.style.borderColor="red";
		checktt(obj);
		
	}
	else
	{
	ele.style.borderColor="green";
	ele.style.borderWidths="5px";
	checktt(obj);
	}	
}

function checktt(obj)
{
	var ele=document.getElementById(obj.id);
	var nxtid=document.getElementById(obj.id).nextSibling.nextElementSibling.id;
	if(ele.value!='')
	{
		if(ele.value!='Invalid')
		{
			
			document.getElementById(nxtid).style.visibility='hidden';
		}
		else
			
			document.getElementById(nxtid).style.visibility='visible';
	}
}


 function validate() {
	 var email=document.getElementById('email');
	 var val=email.value;

            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(val) == false) 
            {
				email.value="It is invalid";
				email.style.borderColor="red";
            }
			else{
							email.style.borderColor="green";
							email.style.borderWidths="5px";
				}
 }
 function phnvalidate(id)
 {
	 var ele=document.getElementById(id);
	var n=ele.value;
	var reg=/(\d)\1{9}/;
	
	if(n == "" || reg.test(n)==true || n.length!=10)
	{
		
		ele.value.text="Invalid";
		ele.style.borderColor="red";
	
	}
	else
	{
	ele.style.borderColor="green";
	ele.style.borderWidths="5px";
	}	
 }
 function dobvalidate()
 {
	  var dob=document.getElementById('dob').value;
	  var today=new Date();
	  var day=Date.parse(dob);
   
      if(today<=day)
		  document.getElementById('dob').style.borderColor='red';

 } 
 
 function vpassword()
 {
	  var pass=document.getElementById('pass').value;
	 if(pass.length<8)
	 {
				document.getElementById('pass').style.borderColor="red";

	 }
	 else
	 {

	 document.getElementById('pass').style.borderColor="green";
	document.getElementById('pass').style.borderWidths="5px";
	 }		
 }
 function repassword()
 {
	  var pass=document.getElementById('pass').value;
	  var passw=document.getElementById('passw').value;
	 if(pass!=passw || passw.length==0)
	 {
				
				document.getElementById('passw').style.borderColor="red";
	 }
	 else
	 {
	 document.getElementById('passw').style.borderColor="green";
	document.getElementById('passw').style.borderWidths="5px";
	 }
 }
 
 function valid(id)
 {
    var ele=document.getElementById(id);
	var n=ele.value;
	var reg=/^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/;
	
	if(n == "" || reg.test(n)!=true)
	{	
		ele.value="Invalid";
		ele.style.borderColor="red";
	}
	else
	{
	ele.style.borderColor="green";
	ele.style.borderWidths="5px";
	}
 }
function zipcode(id)
{
	var ele=document.getElementById(id);
	var n=ele.value;
	var reg=/^[0-9\-]*[0-9]*$/;
	if(n == "" || reg.test(n)!=true)
	{	
		ele.value="Invalid";
		ele.style.borderColor="red";
	}
	else
	{
		ele.style.borderColor="green";
		ele.style.borderWidths="5px";
	}
}
function checkadd(id)
{
	var ele=document.getElementById(id);
	var n=ele.value;
	if(n == "")
	{	
		ele.value="Invalid";
		ele.style.borderColor="red";
	}
	else
	{
		ele.style.borderColor="green";
		ele.style.borderWidths="5px";
	}
}
 function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
 function captcha()
 {
	
	 		var c=0;
		while(c==0)
		{
			generate();
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
	a=rand();
	var possible="+-*/"
	d=possible.charAt(Math.floor(Math.random() * 4));
	b=rand();
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
		 alert("Successful");
	 else
		 alert("Unsuccessful");
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 