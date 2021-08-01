const express = require('express');
var dbClient = require("./SQLite.js");
var routes  = require("./Routes.js");

var app = express();

dbClient = new dbClient();

// Defined Port where the API runs On
const PORT = 9090;

var server = app.listen(PORT, () => {
    // Set Time ut to populate Databases
    setTimeout(function () {
        //Comment so that the data is persisted
        dbClient.removeDataBase();
        setTimeout (function(){},3000);

        // Sets up sample database and tables
        dbClient.setUpDBAndTables();
        console.log(`server running on port ${PORT}`);
    }, 3000);
    routes(app);
});
