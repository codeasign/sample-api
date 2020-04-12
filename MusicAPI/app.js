const express = require('express');
var dbClient = require("./SQLite.js");
var routes  = require("./Routes.js");

var app = express();

dbClient = new dbClient();

const PORT = 9090;

var server = app.listen(PORT, () => {
    setTimeout(function () {
        dbClient.removeDataBase();
        setTimeout (function(){},3000);
        dbClient.setUpDBAndTables();
        console.log(`server running on port ${PORT}`);
    }, 3000);
    routes(app);
});
