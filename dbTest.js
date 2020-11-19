const db = require('./models');

// create a movie 
db.movie.findOrCreate({
    where: { title: "Godfather"},
    defaults: {
        byline: "Vincent Canby",
        headline: "Godfather, Part II",
        date: Date.now(),
        url: "http://nyt.com"
    }
}).then(([movie, created]) => {
    console.log(created);
    console.log(movie);
}).catch(err => {
    console.log(err);
})