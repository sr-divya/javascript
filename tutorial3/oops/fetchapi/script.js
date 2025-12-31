//JSON format - javascript object notation
// {
//     "name":"divya" //dono side quotes lage hote h
// }

function fetchuser(){
    //jb bhi button pr click hoga to pehle se jo data h usse clear kr dega
    fetch("https://randomuser.me/api/?results=3") //url pr jaega data lkr ayega

//resolve hoga to then chalega 
    .then((rawdata)=>{
        // console.log(rawdata);
        //jab bhi fetch krte hein to jo then me data milta hai use
        // wapas se json me convert krna padta hai
        return rawdata.json();
    })
    .then((data)=>{
        // console.log(data);
        // console.log(data.results[0].name.first);
        // console.log(data.results[0].picture.large);
        document.querySelector(".users").innerHTML=""; 
        data.results.forEach((user)=>{
            // console.log(user.name);
            // console.log(user.picture.large);
            // main card
            const card = document.createElement("div");
            card.className = "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full";

            // header
            const header = document.createElement("div");
            header.className = "flex items-center space-x-4";

            // image
            const img = document.createElement("img");
            img.src = user.picture.large;
            img.alt = "User Avatar";
            img.className = "w-16 h-16 rounded-full";

            // text container
            const textDiv = document.createElement("div");

            // name
            const name = document.createElement("h2");
            name.className = "text-xl font-semibold text-gray-900 dark:text-white";
            name.innerText = user.name.first + " " + user.name.last;

            // email
            const email = document.createElement("p");
            email.className = "text-gray-600 dark:text-gray-300";
            email.innerText =user.email;

            // append name & email
            textDiv.append(name, email);

            // append img & text to header
            header.append(img, textDiv);

            // details section
            const details = document.createElement("div");
            details.className = "mt-4";

            const role = document.createElement("p");
            role.className = "text-gray-700 dark:text-gray-200";
            role.innerText = "Software Developer";

            const joined = document.createElement("p");
            joined.className = "text-gray-500 dark:text-gray-400 text-sm";
            joined.innerText = "Joined in 2023";

            // append details
            details.append(role, joined);

            // append everything to card
            card.append(header, details);

            // add card to body
            document.querySelector(".users").appendChild(card);

        })
    })
    // resolve hoga to then chalega
    .catch((err)=>{
        console.log(err);
    });
}

fetchuser();

    document.querySelector('button').addEventListener('click',()=>{
        // location.reload();
        fetchuser();
    }
    );



