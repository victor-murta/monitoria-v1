const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080

app.use(express.static(__dirname + '/dist/monitoria-bcc'));

app.get('/*', (req, res) => {
res.sendFile(path.join(__dirname + '/dist/monitoria-bcc/index.html'));
});

app.listen(PORT, () => {
  console.log(PORT);
});
