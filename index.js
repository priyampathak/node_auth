const express = require('express')
const bodyParser = require('body-parser');
const connectToDatabase = require('./connection')
const userRoutes = require('./routes/usersRoute');
const cookieParser = require('cookie-parser');

const app = express()


// Use cookie-parser middleware to parse cookies
app.use(cookieParser());

app.use(bodyParser.json())

require('dotenv').config({ path: '.env.local' })

connectToDatabase();

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server started on PORT ${PORT}`)
})


