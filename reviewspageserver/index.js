const express = require('express');
var http = require('http');
var bodyParser = require("body-parser");
const app = express();
var cors = require('cors');
var connection = require('./Database/Connection');

var Procedures = require('./Database/Procedures');



var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
     
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Then pass them to cors:
app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});



app.get('/api/endpoint1', (req, res) => {
  
  params = req.query;

  Procedures.searchGames(res,connection,'CALL SEARCH_GAME', params.search);

});


app.get('/api/getgenres',(req,res)=>{

  Procedures.getGenreList(res,connection,'CALL SELECT_GENRES');
});

app.post('/api/addgame',(req,res) =>{
  
  params = req.body.params;
  
  console.log(params)
 
});

app.get('/api/getreview',(req,res)=>{

  console.log(req.query);

  params = req.query;

  console.log(params);
  Procedures.getReview(res,connection,'CALL GET_REVIEW',params.titleName  );

});



app.listen(8080);
