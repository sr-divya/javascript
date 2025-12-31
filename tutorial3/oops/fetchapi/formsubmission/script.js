//form submission using fetch api

let form=document.querySelector('form');
let name=document.getElementById('name');
let email=document.getElementById('email');
let password=document.getElementById('password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    fetch(url,{
        method:'POST',
        body:JSON.stringify({
            name,email,password
        })
    })
});