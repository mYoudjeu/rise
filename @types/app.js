var fs = require('fs');
const express = require("express");
const cors = require("cors");
const app = express();
const bp = require("body-parser");
const qr = require("qrcode");
var http = require('http');
var WebSocket = require('ws');
var server = http.createServer(app);



app.use(express.static('assets'));
app.use(cors({ origin: "*" }));




app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: "absent" }));
app.use(bp.json());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



// app.get('/', (req, res)=>{} )

require("./routes/donation.routes")(app);
require("./routes/needy.routes")(app);
require("./routes/volunteer.routes")(app);
require("./routes/partner.routes")(app);1

server.listen(process.env.PORT || 3000, () => { console.log("listening on 3000") });
