const epxress = require('express')
const app = epxress()
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
require('./config/dbConnection')
dotenv.config()



app.use(cors())
app.use(epxress.json())
app.use(cookieParser())
app.use('/api/users', authRoute)



app.listen(4000,()=>{
    console.log('Server running on port 4000.');
})