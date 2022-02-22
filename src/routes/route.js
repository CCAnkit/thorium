const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})
// 1. This API will fetch an array of movies and return the value in response.
router.get('/movies-test', function(req, res){
    const arrMovie = ["Don", "Force", "Dishoom", "Shiddat", "Pushpa"]
    res.send(arrMovie)
})

// 2. This API will check if a GET/movies/1 is a valid request and it should return
// This movie is your array index.
router.get('/movie/:movieIndex', function(req, res){
    mov = ["Don", "Force", "Dishoom", "Shiddat", "Pushpa"]
    let value = req.params.movieIndex;
    res.send(mov[value])
})

// 3. Edge Case- If request is not valid in problem 2 if index is greater than the
// max valid return an error to use a valid index
router.get('/movies/:movieId', function(req, res){
    movi = ["Don", "Force", "Dishoom", "Shiddat", "Pushpa"]
    let value1 = req.params.movieId
    if(value1>mov1.length-1) {
        res.send(`"Error: Use a valid Id"`)
    } else {
        res.send(mov1[value1])
    }
})

// 4. Return the entire array of objects in this API's
router.get('/films', function(req, res){
    let filmArr = [
            {
                "id": 1,
                "name": "The Shining"
            },
            {
                "id": 2,
                "name": "Incendies"
            },
            {
                "id": 3,
                "name": "Rand De Basanti"
            },
            {
                "id": 4,
                "name": "Finding Demo"
            }
    ]
    res.send(filmArr)
})

// 5. From above array of objects is GET/films/3 is a valid request then respond
// with value else respond 'No movie exists with this Id'

router.get('/films1/:filmId', function(req, res){
    filmArr1 = [
        {
            "id": 1,
            "name": "The Shining"
        },
        {
            "id": 2,
            "name": "Incendies"
        },
        {
            "id": 3,
            "name": "Rand De Basanti"
        },
        {
            "id": 4,
            "name": "Finding Demo"
        }

    ]
    let value2 = req.params.filmId;
    if (value2>filmArr1.length-1){
        res.send(`"No movie exists with this id"`)
    } else {
        res.send(filmArr1[value2])
    }

})


module.exports = router;

