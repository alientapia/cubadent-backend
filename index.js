'use strict'

var mongoose = require('mongoose');

//importar app server
var app = require('./app');

app.set('port',process.env.PORT || 3000);


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cubadent',{useNewUrlParser:true,useUnifiedTopology:true})
                .then(() => {
                    console.log('Conectado correctamente a la base datos......');
                    app.listen(app.get('port'), ()=>{
                        console.log('Server on port',app.get('port'),'.....')
                    });
                })
                .catch(err => console.log(err));