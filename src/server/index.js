const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080

// PRODUCTION CLIENT BUILD ONLY: Serve static files from the React app
// app.use(express.static(path.join(__dirname, '/src/client/build')));

app.use(cors())

app.get('/ping', function (req, res) {
 return res.json('pong');
});

// PRODUCTION CLIENT BUILD ONLY:  
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// ERROR Middleware
app.use((err, req, res, next) => {
  if(err)
    console.log(err.stack)
    res.status(500).send(`ERROR: ${err.stack}`)
})

app.listen(port)
console.log(`Listening on PORT: ${port}`)


