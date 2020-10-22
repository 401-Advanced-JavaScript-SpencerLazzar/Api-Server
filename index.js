
const app = require('./lib/server.js');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT;



mongoose.connect('mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("DB Connection established"))
  .catch(err => console.log("No", err))



app.listen(PORT, () => {
  console.log('Server running on port 3000');
});


