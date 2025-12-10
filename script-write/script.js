//container div
let div=document.createElement("div");
div.classList.add('container');


//heading
let h1=document.createElement('h1');
h1.textContent="Sign Up"
div.appendChild(h1);

//paragraph
let p=document.createElement('p');
p.classList.add('subtitle')
p.textContent="It's quick and easy.";
div.appendChild(p);

//hr line
let hr=document.createElement('hr');
div.appendChild(hr);

//form create
let form=document.createElement('form');
form.setAttribute("autocomplete","off");

//form div1
let div1=document.createElement('div');
div1.classList.add('name-row');

    let input1=document.createElement('input');
    input1.setAttribute("type","text");
    input1.setAttribute("placeholder","First name");

    let input2=document.createElement('input');
    input2.setAttribute("type","text");
    input2.setAttribute("placeholder","Surname");


    div1.appendChild(input1);
    div1.appendChild(input2);

    //email input
    let email=document.createElement('input');
    email.setAttribute("type","email");
    email.setAttribute("placeholder","Mobile No. or Email Address");

    //password input
    let password=document.createElement('input');
    password.setAttribute("type","password");
    password.setAttribute("placeholder","New Password");

    form.appendChild(div1);
    form.append(email);
    form.appendChild(password);

    //label element
    let label=document.createElement('label');
    label.textContent="Date of Birth";
    form.appendChild(label);

    //div dob
    let div2=document.createElement('div');
    div2.classList.add('dob');

        let select=document.createElement('select');
        let op1=document.createElement('option');
        op1.textContent="Day";
        let op2=document.createElement('option');
        op2.textContent="1";
        let op3=document.createElement('option');
        op3.textContent="2";
        let op4=document.createElement('option');
        op4.textContent="3";
        
        let select1=document.createElement('select');
        let opt1=document.createElement('option');
        opt1.textContent="Month";
        let opt2=document.createElement('option');
        opt2.textContent="Jan";
        let opt3=document.createElement('option');
        opt3.textContent="Feb";
        let opt4=document.createElement('option');
        opt4.textContent="March";

        let select2=document.createElement('select');
        let opty1=document.createElement('option');
        opty1.textContent="Year";
        let opty2=document.createElement('option');
        opty2.textContent="2000";
        let opty3=document.createElement('option');
        opty3.textContent="2001";
        let opty4=document.createElement('option');
        opty4.textContent="2002";

        select.appendChild(op1);
        select.appendChild(op2);
        select.appendChild(op3);
        select.appendChild(op4);

        select1.appendChild(opt1);
        select1.appendChild(opt2);
        select1.appendChild(opt3);
        select1.appendChild(opt4);

        select2.appendChild(opty1);
        select2.appendChild(opty2);
        select2.appendChild(opty3);
        select2.appendChild(opty4);

        div2.appendChild(select);
        div2.appendChild(select1);
        div2.appendChild(select2);

        form.appendChild(div2);

    //gender label

    let lbl=document.createElement('label');
    lbl.textContent="Gender";
    form.appendChild(lbl);

    //gender div

    let div3=document.createElement('div');
    div3.classList.add('gender');

        let label1=document.createElement('label');
        label1.classList.add('g-box');
        let text1=document.createElement('span');
        text1.textContent="Female"

        let G1=document.createElement('input');
        G1.type = "radio";
G1.name = "gender";

        let span1=document.createElement('span');
        span1.classList.add('checkmark');

         label1.appendChild(text1);
        label1.appendChild(G1);
        label1.appendChild(span1);

        let label2=document.createElement('label');
        label2.classList.add('g-box');
        let text2=document.createElement('span');
        text2.textContent="Male"

        let G2=document.createElement('input');
        G2.setAttribute("type","radio");
        G2.setAttribute("name","gender");

        let span2=document.createElement('span');
        span2.classList.add('checkmark');

        label2.appendChild(text2);
        label2.appendChild(G2);
        label2.appendChild(span2);

        let label3=document.createElement('label');
        label3.classList.add('g-box');
        label3.textContent="Custom"

        let G3=document.createElement('input');
        G3.setAttribute("type","radio");
        G3.setAttribute("name","gender");

        let span3=document.createElement('span');
        span3.classList.add('checkmark');

       

        

        label3.appendChild(G3);
        label3.appendChild(span3);

        div3.appendChild(label1);
        div3.appendChild(label2);
        div3.appendChild(label3);

    form.appendChild(div3);

    div.appendChild(form);

document.body.appendChild(div);



