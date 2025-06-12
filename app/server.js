const express = require("express");
const serveStatic = require("serve-static");
const port = process.env.PORT || 5001;
app = express();
app.use(serveStatic("/dist"));
app.listen(port);
console.log("server started " + port);
