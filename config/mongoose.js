const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Chandra:chandra123@chandra827.my7yoqa.mongodb.net/Issue_Tracker');
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'erroe connecting to db'));
// up and running then message
db.once('open',function(){
    console.log('Success fully connected to the database')
})