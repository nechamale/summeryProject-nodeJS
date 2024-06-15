require('dotenv').config();
const express = require('express');

const volunteerRouter = require('./routers/volunteer.router.js');
const helpReqestRouter = require('./routers/helpReqest.router.js');
const locationRouter = require('./routers/location.router.js');

const app = express();

const host = process.env.HOST;
const port = process.env.PORT;

app.use(express.json());

app.use('/api/volunteer', volunteerRouter);
app.use('/api/helpReqest', helpReqestRouter);
app.use('/api/location', locationRouter);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('An error occurred, please try later...');
})



app.listen(port, host, () => {
    //here we can do stuff that should be done once the server is up
    console.log(`express server is running at http://${host}:${port}/api/volunteer`);
})
