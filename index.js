const express = require('express')
const app = express();


app.use(express.static('static'))

app.get('/', function (req, res) {
  res.send('Hello World!')
});


app.get('/test', function (req, res) {
    res.send({
        id: 1,
        description: "Hello World"
    });
});

app.post('/.auth/login/aad/callback', function(req,res) {
    console.log('auth post received');
    res.send({status: "OK"})
});



app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})