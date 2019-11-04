const express = require('express'); // retorna uma função

const app = express();

// primeira rota 
app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(3001);