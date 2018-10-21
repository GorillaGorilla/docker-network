const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3052;

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.get('/myname', (req, res) => {
  console.log('GET /myname');
  const data = {
    name: 'Freddie',
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});

