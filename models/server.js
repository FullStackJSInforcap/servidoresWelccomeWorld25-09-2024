const express = require('express');
const hbs = require('hbs');

class Server{

    constructor(){
        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.set('view engine', 'hbs');
        hbs.registerPartials(__dirname.slice(0, __dirname.length - 7) + '/views/partials');
    }

    routes(){
        this.app.use('/archivos', require('../routes/archivos.routes'));
    }

    listen(){
        this.app.listen(3000, () => {
            console.log('Escuchando por el puerto 3000');
        });
    };
}

module.exports = Server;