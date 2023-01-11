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

module.exports = Cinema;
