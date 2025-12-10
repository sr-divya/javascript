let input = document.querySelector('input');

//   console.log(card);

let card = document.querySelectorAll('.card');
input.addEventListener("keyup", function () {
    let text = input.value.toLowerCase();

    card.forEach(function (card) {
        let title = card.querySelector('h3').textContent.toLowerCase();
        let desc = card.querySelector('p').textContent.toLowerCase();


        if (title.indexOf(text) != -1 || desc.indexOf(text) != -1) {
            card.style.display = "block"; //show
        } else {
            card.style.display = "none"; //hide
        }
    })
})

// let searchBox = document.getElementById("searchBox");
// let cards = document.querySelectorAll(".card");

// searchBox.addEventListener("input", function () {
//     let query = searchBox.value.toLowerCase();

//     cards.forEach(card => {
//         let title = card.querySelector("h3").textContent.toLowerCase();
//         let desc = card.querySelector("p").textContent.toLowerCase();

//         if (title.includes(query) || desc.includes(query)) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     });
// });
