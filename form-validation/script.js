let form=document.querySelector('form');

let email=document.querySelector('#email');
let password=document.querySelector('#password');

// let btn=document.querySelector('button');

form.addEventListener("submit",function(dets){

    dets.preventDefault();

    document.querySelector('#emailError').innerText="";
    document.querySelector('#passwordError').innerText="";
    document.querySelector('#successMsg').innerText="";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  let emailtext=email.value.trim();
  let passtext=password.value.trim();

  if(!emailRegex.test(emailtext)){
    document.querySelector('#emailError').innerText="Invalid Email Format";
  }
   if(!passwordRegex.test(passtext)){
    document.querySelector('#passwordError').innerText="Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
  }
  if(emailRegex.test(emailtext) && passwordRegex.test(passtext)){
    document.querySelector('#successMsg').innerText="Form submitted successfully!";
  }
})