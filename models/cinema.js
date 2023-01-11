const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getNames = function () {
  return this.films.map(films => films.title)
}

Cinema.prototype.getAllFromGenre = function (genreSearched) {
  return this.films.filter(function (film) {
    if (film.genre === genreSearched) {
      return film.genre
    }
  })
}

Cinema.prototype.getTotalLength = function () {
  return this.films.reduce (function (runningTotal, film) {
    return runningTotal + film.length}, 0)

}

Cinema.prototype.getTitle = function (titleSearched) {
  const answer = this.films.filter (function (film) { 
    if (film.title === titleSearched) {
    return film
    }
  })
  return answer[0]
}

Cinema.prototype.getYear = function (yearSearched) {
  return this.films.filter(function (film) {
    if (film.year === yearSearched) {
      return film.year
    }
  })
}

module.exports = Cinema;
