/* Задания на урок:



4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

*/

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  const advImg = document.querySelectorAll('.promo__adv img'),
    genreTitle = document.querySelector('.promo__genre'),
    poster = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let newFilm = addInput.value;
    const favoriteFilm = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favoriteFilm) {
        console.log('Добавляем любимый фильм');
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, movieList);
    }

    addForm.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genreTitle.textContent = 'драма';

    poster.style.backgroundImage = "url('img/bg.jpg')";
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = '';

    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
          <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
          </li>
      `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(movieDB.movies, movieList);

        console.log(movieDB.movies);
      });
    });
  }

  deleteAdv(advImg);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
