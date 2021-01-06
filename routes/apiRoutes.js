// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    // get any notes inside active notes
    app.get("/api/notes", function(req, res) {
        console.log(activeNote)
      res.json(activeNote)
    });

    // when a post request is made 
    
  
    app.post("/api/notes", function(req, res) {
        console.log(activeNote)
        activeNote.push(req.body)
    
    });
  
    // // If no matching route is found default to home
    // app.get("*", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/index.html"));
    // });
  };