const express = require('express');
const app = express();
const path = require('path');
const routes = require("./routes/tiendaRoutes");
const port= process.env.port || 4500;

app.set("views",path.join(__dirname,"views"));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use("",routes);

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});