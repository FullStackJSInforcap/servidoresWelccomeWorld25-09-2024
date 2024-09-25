const fs = require('fs');

const crear = (req, res) => {
    const nombreArchivo = req.query.txtNombreArchivo;
    const contenido = req.query.txtContenido;
    if (nombreArchivo && contenido) {
        fs.writeFile(`./data/${nombreArchivo}`, contenido, (err) => {
            res.render('crear', {
                titulo: 'Crear'
            });
        });
        return;
    }
    res.render('crear', {
        titulo: 'Crear'
    });
}

const leer = (req, res) => {
    const nombreArchivo = req.query.txtNombreArchivo;
    if (nombreArchivo) {
        fs.readFile(`./data/${nombreArchivo}`, (err, datos) => {
            res.render('leer', {
                titulo: 'Leer',
                datos: datos
            });
        });
        return;
    }
    res.render('leer', {
        titulo: 'Leer'
    });
}

const renombrar = (req, res) => {
    const nombreArchivo = req.query.txtNombreArchivo;
    const nombreNuevoArchivo = req.query.txtNombreNuevoArchivo;
    if (nombreArchivo && nombreNuevoArchivo) {
        fs.rename(`./data/${nombreArchivo}`, `./data/${nombreNuevoArchivo}`, (err) => {
            res.render('renombrar', {
                titulo: 'Renombrar'
            });
        });
        return;
    }
    res.render('renombrar', {
        titulo: 'Renombrar'
    });
}

const eliminar = (req, res) => {
    const nombreArchivo = req.query.txtNombreArchivo;
    if (nombreArchivo) {
        fs.unlink(`./data/${nombreArchivo}`, (err) => {
            res.render('eliminar', {
                titulo: 'eliminar'
            });
        });
        return;
    }
    res.render('eliminar', {
        titulo: 'eliminar'
    });
}

module.exports = {
    crear,
    leer,
    renombrar,
    eliminar
}