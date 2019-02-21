var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;
const syncOptions = { force: false };
var db = require('./models');

require('dotenv').config();
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Syncing sequelize models and Start our server so that it can begin listening to client requests.
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
})

module.exports = app;
