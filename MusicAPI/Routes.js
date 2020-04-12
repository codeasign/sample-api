var bodyParser = require("body-parser");
var dbClient = require("./SQLite.js");
var configurations = require("./Configuration.js");

configurations = new configurations();
dbClient = new dbClient();

function mockHeader(res)
{
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('bearer-musicapi', 'music-api-host-bqrx543546172');
    res.setHeader('apiVersion', '1.0');
    res.setHeader('source', 'www.myapi.net');

}

var appRouter = function (app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/getFeed/:feedId', (req, res) => {

        var error = false;
        var feedId = req.params.feedId;
        console.log("Feed is is " + feedId);
        if(feedId>3 || feedId <0)
        {
            error = true
            res.status(400).send({"Error":"Feed id range is 1-3"});
        }
        if(!error)
        {
            if(feedId == 1)
            {
                res.status(200).send(JSON.parse(configurations.get_Json1));
            }

            if(feedId == 2)
            {
                res.status(200).send(JSON.parse(configurations.get_Json2));
            }

            if(feedId == 3)
            {
                res.status(200).send(JSON.parse(configurations.get_Json3));
            }
        }
    });

    app.get('/api/getArtists', (req, res) => {
        mockHeader(res);
        const statement = 'Select * from ' + configurations.get_ArtistTable+ ";";
        dbClient.executeQuery(statement).then(function(text){
            res.status(200).send(text);
        })
    });

    app.post('/api/addArtist', (req, res) => {
        var error = false;
        mockHeader(res);
        var artistName  = req.body.artist;
        var genre = req.body.genre;
        console.log(req.body);

        if(artistName === '' || artistName === null || artistName === 'undefined')
        {
            error = true
            res.status(400).send({"Error":"query parameter 'artist' is missing from request"});
        }

        if(genre === '' || genre ===null || genre  === 'undefined')
        {
            error = true;
            res.status(400).send({"Error":"query parameter 'genre' is missing from request"});
        }

        if(!error)
        {
            var statement = 'INSERT INTO ' +  configurations.get_ArtistTable +
            ' Values(\"' + artistName + '\",\"'  + genre + '");';
            dbClient.executeQuery(statement).then(function(text){
                if(text!== 'undefined')
                    res.status(200).send({"Message":"Success"})
            })
        }
    });
}

module.exports = appRouter;