const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection')

const app = express();
const PORT = 8080;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})




