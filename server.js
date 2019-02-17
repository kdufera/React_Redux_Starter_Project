// var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();
var _ = require('lodash');


app.set('port', (process.env.PORT || 3000));
app.use(express.json());
app.use(express.static( __dirname + '/build'));
// app.use(sslRedirect());



app.listen(app.get('port'),function(){
    console.log(`App is runing. Listening on ${app.get('port')}`);
});

module.exports = {app};
