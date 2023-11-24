//your JS code here. If required.
<form>
	<label for="First Name">First Name:</label>
	<input type="text" name="First Name" id="fname"/><br/>
	<label for="Last Name">Last Name:</label>
	<input type="text" name="Last Name" id="lname"/><br/>
	<label for="Phone Number">Phone Number:</label>
	<input type="text" name="Phone Number" id="pnumber"/><br/>
	<label for="Email ID">Email ID:</label>
	<input type="text" name="Email ID" id="emailId"/> <br/>

	<button type="submit" class="button">Submit</button>


	</form>const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const pnumber = document.querySelector("#pnumber");
const email  =document.querySelector("#emailId");

const btn = document.querySelector(".button");
btn.addEventListener("click",(e)=>{
	e.preventDefault();
	alert(`First Name: ${fname.value}\nLast Name: ${lname.value}\nPhone Number: ${pnumber.value}\nEmail ID: ${email.value}`);
	// alert("First Name: "+lname.value);
})