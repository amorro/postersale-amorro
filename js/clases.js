export default class Peli {
  constructor(id, title, duration, director, genre, actor) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.director = director;
    this.genre = genre;
    this.actor = actor;
  }
}

export default class Serie {
  constructor(id, title, seasons, director, genre, actor) {
    this.id = id;
    this.title = title;
    this.seasons = seasons;
    this.director = director;
    this.genre = genre;
    this.actor = actor;
  }
}
