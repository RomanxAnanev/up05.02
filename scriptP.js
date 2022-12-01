import { movies } from './bd.js';

let paramsId = (new URL(document.location)).searchParams;
console.log(paramsId.get('id'));

const moviesPage = document.querySelector('.main__cardContent');

function pageCreate(){
    const card = [];
    movies.forEach((i)=>{
        if (i.id == paramsId.get('id'))
            card.push({
                template:`<div class="cardContent__img">
            <a href="#"><img src="${i.image}" alt=""></a>
        </div>
        <div class="cardContent__description">
            <div class="description__title">
                <h1>Название :  ${i.name}</h1>
            </div>
            <div class="description__genre">
                <h2>Жанр :  ${i.genre}</h2>
            </div>
            <div class="description__year">
                <h2>Год :  ${i.year}</h2>
            </div>
            <div class="description__rate">
                <h2>Рэйтинг :  ${i.rate}</h2>
            </div>

            <div class="description__text">
                <p>${i.content}</p>
            </div>
            <div class="video">
            <iframe width="560" height="315" src="${i.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>`,
        id: i.id,
        image: i.image,
        name: i.name,
        genre: i.genre,
        content: i.genre,
        year: i.year,
        rate: i.rate,
        age: i.age,
        video: i.video
        });
    });
    return card;
};
pageCreate().map((value)=> {
    moviesPage.innerHTML += value.template;
});

