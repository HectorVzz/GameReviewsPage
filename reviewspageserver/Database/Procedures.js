
 function newProcedure(res,connection,procedure,params){
    let ResultadoFromDB;

    let sql = procedure;

    if(!params==false){
        sql = sql + '("'+ params +'")';
        console.log(sql)
        connection.query(sql, true, (error, results, fields)  => {
            if (error) {
                    return console.error(error.message);
                }
            ResultadoFromDB = results[0];
            res.send(ResultadoFromDB)
            return   ResultadoFromDB;
        });
    }
    else{
        connection.query(sql, true, (error, results, fields)  => {
            if (error) {
                    return console.error(error.message);
                }
            ResultadoFromDB = results[0];
            res.send(ResultadoFromDB);
            return   ResultadoFromDB;
        });
    }   
};

function searchGames(res,connection,procedure,params){

    let ResultadoFromDB;

    let sql = procedure;

    sql = sql + '("'+ params +'")';
    console.log(sql)
    connection.query(sql, true, (error, results, fields)  => {
        if (error) {
                return console.error(error.message);
            }
    ResultadoFromDB = results[0];
    console.log(ResultadoFromDB);
    res.send(ResultadoFromDB)
    return   ResultadoFromDB;
        });
    
}

function getGenreList(res,connection,procedure){
    let sql = procedure;
    connection.query(sql, true, (error, results, fields)  => {
        if (error) {
                return console.error(error.message);
            }
        ResultadoFromDB = results[0];
        let gameList = [];
        ResultadoFromDB.forEach(element => {
            gameList.push(element.name);
        });
        res.send(gameList);
        return   ResultadoFromDB;
    });

}

function getReview(res,connection,procedure,params){

    let ResultadoFromDB;

    let sql = procedure;

    sql = sql + '("'+ params +'")';
    console.log(sql)
    connection.query(sql, true, (error, results, fields)  => {
        if (error) {
                return console.error(error.message);
            }
        ResultadoFromDB = results[0];
        res.send(ResultadoFromDB);
        console.log(ResultadoFromDB);
        return   ResultadoFromDB;
    });
}


 exports.newProcedure = newProcedure;
 exports.getGenreList = getGenreList;
 exports.searchGames = searchGames;
exports.getReview = getReview;