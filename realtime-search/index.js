let input=document.querySelector('#searchBox');
let text=input.ariaValueMax.toLowerCase();
// let ul=document.querySelectorAll('#itemList');

// let item=input.value().toLowerCase();
let items=document.querySelectorAll('#itemList li');
// console.log(items);


input.addEventListener("keyup",function(){
    let item=input.value.toLowerCase();
    // let items=document.querySelectorAll('#itemList li');

    items.forEach(function(li){
        let text=li.textContent.toLowerCase(); 
        if(text.indexOf(item)!=-1){
            li.style.display="block"; //show
        }else{
            li.style.display="none"; //hide
        }
    })
})

// let searchBox = document.getElementById("searchBox");
// let itemList = document.getElementById("itemList");
// let items = itemList.getElementsByTagName("li");

// searchBox.addEventListener("keyup", function () {
//     let query = searchBox.value.toLowerCase();

//     for (let item of items) {
//         let text = item.textContent.toLowerCase();

//         if (text.includes(query)) {
//             item.style.display = "block";  // show
//         } else {
//             item.style.display = "none";   // hide
//         }
//     }
// });
