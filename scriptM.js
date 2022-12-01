import { movies } from "./bd.js";

const moviesCards = document.querySelector('.movies__cards');

const selectGenre = document.getElementById('genre');
let genre = ''
let cards = [];

selectGenre.addEventListener("change", ()=>{
    genre = selectGenre.value

});


function cardCreate(){
    
    console.log(genre)

    movies.forEach((i)=>{
        cards.push({
            template:`<div class="cards__card card-${i.id}">
            <div class="card__title">
                <h1>${i.name}</h1>
            </div>
            <div class="card__img">
                <div class="img__container">
                    <a href="page.html?id=${i.id}" id="${i.id}"><img src="${i.image}" alt=""></a>
                </div>
            </div>
            <div class="card__rate">
                <div class = "rate__count">
                    <p class="rate">${i.rate}</p>
                    <img src="img/Star 4.svg" alt="">
                </div>
                <p class="year">${i.year}</p>
            </div>
        </div>`,
        name: i.name,
        id: i.id,
        image: i.image,
        rate: i.rate,
        year: i.year
        });
    });
    return cards
};
cardCreate()
cards.map((value)=> {
    moviesCards.innerHTML += value.template;
})


// const addFilmName = document.querySelector('new__name');
// const addFilmIamge = document.querySelector('new__image');
// const addFilmGenre = document.querySelector('new__genre');
// const addFilmContent = document.querySelector('new__content');
// const addFilmYear = document.querySelector('new__yaer');
// const addFilmRate = document.querySelector('new__rate');
// const addFilmAge = document.querySelector('new__age');
// const addFilmVideo = document.querySelector('new__video');
// const addFilmButton = document.querySelector('#addFilmbtn');

// console.log(addFilmButton);

// addFilmButton.addEventListener('click', (event) => {
//     console.log(addFilmGenre)
//     const newFilm = {
//         image: addFilmIamge.value,
//         name:addFilmName.value,
//         genre:addFilmGenre.value,
//         content:addFilmContent.value,
//         year:addFilmYear.value,
//         rate:addFilmRate.value,
//         age:addFilmAge.value,
//         video:addFilmVideo.value,
//     }
//     movies.push(newFilm);
//     console.log(movies)
// });













// selectRate.forEach(item () =>{
//         ('change',function(){
//         let getValueRate = this.value;
//     });
// });

//по зименению селекта взять значение и сравнить с тем что надо 
//если тру то меняет,
// document.querySelector('.movies__cards').style.flexWrap = "wrap-reverse";


// if(event.target.value === 'убывание'){
//     document.querySelector('.movies__cards').style.flexWrap = "wrap-reverse";
// }else if(event.target.value === 'возрастание'){
//     addCards(cardSort);
// }