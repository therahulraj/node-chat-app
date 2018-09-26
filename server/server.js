const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


var port = process.env.PORT || 3000;
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});


app.listen(port, () => {
  console.log(`the server is up on port ${port}`);
})
