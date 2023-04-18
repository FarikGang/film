const films = document.querySelector('.cinema')
const filmPosting = (film) => {
    const filmDiv = document.createElement('div')
    filmDiv.classList.add('film')
    filmDiv.innerHTML =
        `
        <h2>Название фильма: ${film.title}</h2>
        <p>Эпизод: ${film.episode_id}</p>
        <p>Пролог: ${film.opening_crawl}</p>
        <p>Директор: ${film.director}</p>
        <p>Продюсер: ${film.producer}</p>
        <p>Фильм создан: ${film.created}</p>
        <p>Фильм изменен: ${film.edited}</p>
        `

    films.append(filmDiv)
}
const filmLoading = () => {
    const divLoading = document.createElement('div')
    divLoading.classList.add('load')
    divLoading.innerHTML =
        `<div class="preloader">
        <div class="loader"></div>
      </div>`

    films.append(divLoading)
}
const filmDelLoad = () => {
    const delLoad = document.querySelector('.load')
    delLoad.innerHTML = ''
}
const filmError = () => {
    const divErr = document.createElement('div')
    divErr.classList.add('error')
    divErr.innerHTML =
        `Ошибка загрузки`
    films.append(divErr)
}

const filmResponseAsy = async () => {
    filmLoading()
    try {
        const films = await fetch("https://swapi.dev/api/films")
        const filmJSON = await films.json()
        inPrint = filmJSON.results.map(films => filmPosting(films))
    } catch (error) {
        filmError()
    } finally {
        filmDelLoad()
    }
}
filmResponseAsy()