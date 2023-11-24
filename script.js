//your JS code here. If required.
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const pnumber = document.querySelector("#pnumber");
const email  =document.querySelector("#emailId");

const btn = document.querySelector(".button");
btn.addEventListener("click",(e)=>{
	e.preventDefault();
	alert(`First Name: ${fname.value}\nLast Name: ${lname.value}\nPhone Number: ${pnumber.value}\nEmail ID: ${email.value}`);
	// alert("First Name: "+lname.value);
})
