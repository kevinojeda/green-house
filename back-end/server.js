const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const alarmaRouter = require('./routes/alarma');
const cosechaRouter = require('./routes/cosecha');
const especificacionRouter = require('./routes/especificacion');
const medicionRouter = require('./routes/medicion');
const personaRouter = require('./routes/persona');

app.use('/alarma', alarmaRouter);
app.use('/cosecha', cosechaRouter);
app.use('/especificaciones', especificacionRouter);
app.use('/medicion', medicionRouter );
app.use('/persona', personaRouter);



app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/front-end/public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});