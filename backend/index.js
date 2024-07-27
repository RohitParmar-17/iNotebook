const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

require('dotenv').config();

connectToMongo();

const app = express()
const port = process.env.PORT || 5000

//Available Routes

const corsOptions = {
  origin:  process.env.FRONTEND_URL , // Your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you need to allow cookies or authentication headers
};

app.use(cors(corsOptions));
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello port!')
})

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})
// npm run dev => for nodemon index.js
