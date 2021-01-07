// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");
const fs = require('fs')

// file path

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    // display current notes 
    app.get("/api/notes", function(req, res) {
        // console.log(noteData)
        // send the any notes inside db.json back to the user
        fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
            console.log(err)
            console.log('ere')
            // if (err) throw err;
            console.log(data);
            const parsedData = JSON.parse(data)
            console.log(parsedData)
            res.json(parsedData)
            // res.end()
        });
        // res.json(noteData)
    });

    // when a post request is made write to db.json then resend data to user
    app.post('/api/notes', function (req, res) {
        // take the response input and write to file
        const note = req.body
        console.log('__dirname--> ', __dirname)
        console.log(note)
        // read file
        fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        //     console.log(err)
        //     console.log('here we are')
            if (err) throw err;
            console.log('readFile data--->', data)
        
            // parse data
            const parsedData = JSON.parse(data);
            parsedData.push(note)
            const newData = JSON.stringify(parsedData)
            fs.writeFileSync(path.join(__dirname, '../db/db.json'), newData, 'utf-8',(err) => {
                if (err) console.log('I am an error=======>', err)
                 console.log('Success')
             })
             res.json(parsedData)
         });
        res.send(req.body)
    })


    app.delete("/api/notes/:id", (req, res) => {
        // pull data off of param object
        const { id } = req.params
        res.send('Delete Request Called')
    })
  };

  