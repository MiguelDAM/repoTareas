// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => movie.director);
    console.log(directors);
    const undupeDirectors = directors.filter(
        (director, index) => directors.indexOf(director) === index
    );
    console.log(undupeDirectors);
    return undupeDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter(
        (movie) =>
            movie.genre.includes('Drama') &&
            movie.director === 'Steven Spielberg'
    );
    console.log(dramaMovies.length);
    return Number(dramaMovies.length);
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const totalScore = moviesArray.reduce((acc, movie) => {
        if (movie.score) {
            return acc + movie.score;
        }
        return acc;
    }, 0);

    const averageScore = totalScore / moviesArray.length;
    console.log(
        `La media de puntuación de todas las películas es de un ${averageScore.toFixed(
            2
        )}`
    );
    return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesFiltered = moviesArray.filter((movie) =>
        movie.genre.includes('Drama')
    );
    const dramaMoviesAverage = dramaMoviesFiltered.reduce(
        (acc, sum) => acc + sum.score / dramaMoviesFiltered.length,
        0
    );
    console.log(
        `La media de puntuación de todas las películas de drama es de un ${dramaMoviesAverage.toFixed(
            2
        )}`
    );
    return Number(dramaMoviesAverage.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.slice().sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    console.log(sortedMovies);
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.sort((a, b) =>
        a.title.localeCompare(b.title)
    );
    const first20 = sortedMovies.slice(0, 20);
    const first20Titles = first20.map((movie) => movie.title);

    console.log(first20Titles);
    return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesDuration = moviesArray.map((movie) => {
        const durationArray = movie.duration.split(' ');
        let totalMinutes = 0;

        durationArray.forEach((time) => {
            if (time.includes('h')) {
                totalMinutes += parseInt(time.replace('h', '')) * 60;
            } else if (time.includes('min')) {
                totalMinutes += parseInt(time.replace('min', ''));
            }
        });

        return {
            ...movie,
            duration: totalMinutes,
        };
    });

    console.log(moviesDuration);
    return moviesDuration;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }

    const scoresByYear = {};

    // Agrupar las puntuaciones por año
    moviesArray.forEach((movie) => {
        if (scoresByYear[movie.year]) {
            scoresByYear[movie.year].push(movie.score);
        } else {
            scoresByYear[movie.year] = [movie.score];
        }
    });

    let bestYear = null;
    let bestAvg = -Infinity;

    // Calcular el promedio de puntuación por año y encontrar el mejor año
    for (const year in scoresByYear) {
        const scores = scoresByYear[year];
        const avg =
            scores.reduce((acc, score) => acc + score, 0) / scores.length;

        if (
            avg > bestAvg ||
            (avg === bestAvg && parseInt(year) < parseInt(bestYear))
        ) {
            bestAvg = avg;
            bestYear = year;
        }
    }

    // Formatear el promedio: si es un número entero, no mostrar decimales
    const formattedAvg = Number.isInteger(bestAvg)
        ? bestAvg.toString()
        : bestAvg.toFixed(1);

    console.log(
        `The best year was ${bestYear} with an average score of ${formattedAvg}`
    );
    return `The best year was ${bestYear} with an average score of ${formattedAvg}`;
}
