var Configuration = function () { };

var json1 = `
[
    {
      "name": "metalllica",
      "genre": "metal",
      "tocontact": "contanct@metallica.com"
    },
    {
      "name": "gnr",
      "genre": "rock",
      "tocontact": "contanct@gnr.com"
    }
  ]
`;

var json2 =`{
    "pop": {
      "artists": [
        {
          "name": "elton john",
          "famousSongs": [
            {
              "title": "tuny dancer"
            },
            {
              "title": "candle in the wind"
            }
          ]
        }
      ]
    },
    "metal": {
      "artists": [
        {
          "name": "metallica",
          "famousSongs": [
            {
              "title": "creeping death"
            },
            {
              "title": "enter sandman"
            }
          ]
        }
      ]
    }
  }`;

var json3 = `[
    {
      "id": 1,
      "name": "metallica",
      "founded": "1981",
      "genre": "metal",
      "best_albums": [
        {
          "title": "master of puppets",
          "year": "1986"
        },
        {
          "title": "metallica",
          "year": "1995"
        }
      ]
    },
    {
      "id": 2,
      "name": "iron maiden",
      "founded": "1971",
      "genre": "metal",
      "best_albums": [
        {
          "title": "iron maiden",
          "year": "1967"
        },
        {
          "title": "number of beast",
          "year": "1985"
        }
      ]
    },
    {
      "id": 3,
      "name": "gnr",
      "founded": "1986",
      "genre": "rock n roll",
      "best_albums": [
        {
          "title": "live n era",
          "year": "2003"
        },
        {
          "title": "Appetite for destruction",
          "year": "1995"
        }
      ]
    },
    {
      "id": 4,
      "name": "rush",
      "founded": "1976",
      "genre": "rock n roll",
      "best_albums": [
        {
          "title": "everything",
          "year": "1800"
        }
      ]
    }
  ]`;

//Name of the databse
var db_Name = "./database.db";

//Table Name
var table_Artist = "Artists";

//States
var states = {
    Success: "success",
    Failed: "failed",
}

Configuration.prototype = Object.create({}, {

    get_States: { get: function () { return states } },
    get_DbName: { get: function () { return db_Name } },
    get_ArtistTable: { get: function () { return table_Artist } }, 
    get_Json1: { get: function () { return json1 } }, 
    get_Json2: { get: function () { return json2 } }, 
    get_Json3: { get: function () { return json3 } }, 
});

module.exports = Configuration;
