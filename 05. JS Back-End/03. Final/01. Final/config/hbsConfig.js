const express = require('express');
const { engine } = require('express-handlebars');

function hbsConfig(app) {
    
    app.use(express.static('public'));
    app.engine('hbs', engine({ extname: 'hbs' }));
    app.set('view engine', 'hbs');
    app.set('views', 'views');

}

module.exports = hbsConfig;