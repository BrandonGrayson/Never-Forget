// be able to use express to send data back
// DEPENDENCIES
var express = require('express')
var path = require("path");

// SET up Express app
// save express to app variable
var app = express()
// dynamic Port including HEROKU  
var PORT = process.env.PORT || 3001;

// Set up Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// handle user requests routes 
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);


// // Basic route that sends the user to Home page
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });



// // Route to send user to notes page
// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "public/notes.html"));
// });

// // console.log(app)

// // starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

      // read file

        // parse data

        // add note to array of objects

        //write array o