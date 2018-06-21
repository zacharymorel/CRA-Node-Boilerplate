const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '/../client/build')))

// ERROR Middleware
app.use((err, req, res, next) => {
  if(err)
    console.log(err.stack)
    res.status(500).send(`ERROR: ${err.stack}`)
})

app.listen(port, console.log(`Listening on PORT: ${port}`))


