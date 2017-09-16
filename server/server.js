const path = require('path')
publicPath = path.join(__dirname, '../public' )
// console.log(__dirname+'../public')
// console.log(publicPath)
const express = require('express');
const app = express();
//middle ware to serve up public filder
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;


app.listen(port, ()=>{
console.log('Server is running on port ',port);
})







