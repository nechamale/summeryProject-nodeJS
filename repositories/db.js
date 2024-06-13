const mongoose = require('mongoose');
connect();
async function connect() {
  try {
    await mongoose.connect('mongodb+srv://sw0504147596:1234@cluster.vtbpacr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'
      , {
      useNewUrlParser :  true ,
      useUnifiedTopology :  true ,
      dbName: 'Nodejs-Project'
      }
    );
      console.log('Connected to MongoDB');;
  }
  catch(err) {
    console.log(err);
    throw new Error('Error connecting to MongoDB');
  }
}

module.exports = {connect};