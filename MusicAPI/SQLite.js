//Sqlite Helper Class
var SQLite = function () { };
var sqlite3 = require('sqlite3');

var sampleJson = require("./SampleJson.js");
sampleJson = new sampleJson();

var states = sampleJson.get_States;

function executeQuery(tableQuery) {
    try {
        var valToReturn = new Promise(function (resolve, reject) {
            db = new sqlite3.Database(sampleJson.get_DbName, (err) => {
                if (err) {
                    reject(err);
                }

                if (!err) {
                    db.serialize(function () {
                        db.all(tableQuery, function (err, rows) {
                            if (!err) {
                                resolve(JSON.stringify(rows));
                                valToReturn = rows;
                            }

                            if (err) {
                                reject(err);
                            }
                        });
                    });
                }
            });
        }).catch(function (error) {
            console.log(error);
        });
        return valToReturn
    } catch (error) {
        reject(states.Failed)
        console.log("Error orrcured " + error);
    }
}

SQLite.prototype = Object.create({}, {

    removeDataBase: {
        value: function () {
            new Promise(function (resolve, reject) {
                var exec = require('child_process').exec;
                var child = exec('del database.db',
                    function (error, stdout, stderr) {
                        if (!error && !stderr) {
                            resolve();
                        }

                        if (error && stdout === 'undefined') {
                            console.log(error);
                            console.log()
                            reject();
                        }
                    });
            }).catch(function (error) {
                console.log(error);
            });
        }
    },

    setUpDBAndTables: {
        value: function () {
            this.removeDataBase();
            var artist_table = 'Create Table if not exists ' + sampleJson.get_ArtistTable + '(artist_name text PRIMARY KEY , genre text)'
            console.log (artist_table);
            executeQuery(artist_table).then(function (text) {
                if (text != states.Failed) {
                    msg = states.Success;
                    console.log("Artists table created " + text)
                }
            }).then(function () {
                console.log("Insertig mock data in artist table");

                var artist = ["Metallica", "Beethoven", "Green Day", "Coldplay", "Iron Maiden", "Elton John"];
                var genre =  ["metal", "classical", "punk rock", "pop", "metal", "pop"];
                for (let i = 0; i < artist.length; i++) {
                    var statement = 'INSERT INTO ' +  sampleJson.get_ArtistTable +
                    ' Values(\"' + artist[i] + '\",\"'  + genre[i] + '");';
                    console.log (statement);
                    executeQuery(statement).then(function (text) {
                        if (text != states.Failed) {
                            msg = states.Success;
                            console.log("Data inserted " + text)
                        }
                    })
                }
            }).catch(function (error) {
                    console.log(error);
                });
            }
    },

    executeQuery: {
        value: function (query) {
            return executeQuery(query).then(function (resultSet) {
                if (resultSet !== null)
                    console.log("Result set returned " + resultSet);
                return resultSet;
            });
        }
    },

});

module.exports = SQLite;