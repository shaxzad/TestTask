const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
const pusher = new Pusher({
  appId: '1496248',
  key: '3539a6557f6f381c89a6',
  secret: '00d2ff7b8d3a7008a534',
  cluster: 'mt1',
  useTLS: true
});

app.set('PORT', process.env.PORT || 5000);


app.post('/message', (req, res) => {
  const payload = req.body;
  pusher.trigger('chat', 'message', payload);
  res.send(payload)
});


app.listen(app.get('PORT'), () =>
  console.log('Listening at ' + app.get('PORT')))