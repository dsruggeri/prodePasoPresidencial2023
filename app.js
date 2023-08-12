const express = require('express');
const app = express();
require('dotenv').config();



const PORT = process.env.PORT


/*configuración del template engine EJS*/
app.set('view engine', 'ejs');
app.set('views', './src/views');


const mainRoutes = require('./src/routes/mainRoutes');


app.use(express.static('./public'))

app.use(express.urlencoded());
app.use(express.json());

app.use('/', mainRoutes);


app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));