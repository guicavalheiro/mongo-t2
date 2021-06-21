const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost/noderest', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// });

try {
    console.log("Logging into: " + process.env.MONGODB_URL);
    mongoose.connect(process.env.MONGODB_URL);
} 
catch(e){
    console.log('Connection Error: ' + e);
    return;
}

module.exports = mongoose;