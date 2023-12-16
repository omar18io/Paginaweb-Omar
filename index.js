// const { error } = require('console');
// const http = require('http')
const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 3000;
const ip = 'localhost';
// npm init -y
// npm install mysql 
// npm install express
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));
app.use('/assets', express.static('assets'));

const conexion = mysql.createConnection({
    host: "localhost",
    database: "formDatos",
    user: "root",
    password: "admin", // contraseña de ustedes
});

conexion.connect(function (err) {
    if (err) {
        throw err; // eanuda la ejecución de un generador al lanzar un error en éste y regresar un objeto con las dos propiedades done y value
    } else {
        console.log("Conexión exitosa")
    }  
});

app.use(express.json()); // analiza el cuerpo de las solicitudes HTTP q contirnr datos de formato JSON en una solicitud POST : analiza los dattosq y lo convierten en objeto 
app.use(cors());
app.use(express.urlencoded({ extended: false })); // Este middleware se utiliza para analizar el cuerpo de las solicitudes HTTP que contienen datos codificados en formato x-www-form-urlencoded. Esto es utilizado cuando los datos se envían desde formularios HTML. Similar al middleware express.json(), este middleware analiza los datos y los convierte en un objeto JavaScript accesible a través de req.body. La opción `{ extendida

app.get("/", function (req, res) {
    var filePath = path.join(__dirname, "./index.html");
    res.sendFile(filePath);  // dirname == representa el directorio actual del archivo
});

app.get("/Ideario.html", function (req, res) {
    var filePath = path.join(__dirname, "./PaginaWeb/informacionCentroVarones/ideario.html");
    res.sendFile(filePath);
});


app.get("/Historia.html", function (req, res) {
    var filePath = path.join(__dirname, "./PaginaWeb/informacionCentroVarones/historia.html");
    res.sendFile(filePath);
});


app.get("/estilosImgSeparador.css", function (req, res) {
    var filePath = path.join(__dirname, "./assets/imagenes/bandacv.png");
    res.sendFile(filePath);
});

app.get("/Organigrama.html", function (req, res) {
    var filePath = path.join(__dirname, "./PaginaWeb/informacionCentroVarones/organigrama.html");
    res.sendFile(filePath);
});


app.get("/FotosIEP.html", function (req, res) {
    var filePath = path.join(__dirname, "./PaginaWeb/informacionCentroVarones/fotosIEP.html");
    res.sendFile(filePath);
});


app.get("/PAT.html", function (req, res) {
    var filePath = path.join(__dirname, "./PaginaWeb/documentosGestion/pat.html");
    res.sendFile(filePath);
});


app.get("/Pei.html", function (req, res) {
    var filePath = path.join(__dirname, "./PaginaWeb/documentosGestion/pei.html");
    res.sendFile(filePath);
});


app.get("/reglamentoInterno.html", function (req, res) {
    var filePath = path.join(__dirname, "./PaginaWeb/documentosGestion/reglamentoInterno.html");
    res.sendFile(filePath);
});


app.get("/testimonioscontac.css", function (req, res) {
    var filePath = path.join(__dirname, "./css/testimonioscontac.css");
    res.sendFile(filePath);
});


app.get("/listaDocentes.html", function (req, res) {
    var filePath = path.join(__dirname, "./PaginaWeb/relacionDocentes/listadocentes.html");
    res.sendFile(filePath);
});

app.get("/estilosPrincipal.css", function (req, res) {
    var filePath = path.join(__dirname, "./css/estilos.css");
    res.sendFile(filePath);
});


app.get("/Materialize.css", function (req, res) {
    var filePath = path.join(__dirname, "./css/materialscss.css");
    res.sendFile(filePath);
});


app.get("/contacto.html", function (req, res) {
    var filePath = path.join(__dirname, "./PaginaWeb/relacionDocentes/contacto.html");
    res.sendFile(filePath);
});


app.get("/testimonijs.js", function (req, res) {
    var filePath = path.join(__dirname, "./js//testimonijs.js");
    res.sendFile(filePath);
});


app.get("/mainCarrusel.js", function (req, res) {
    var filePath = path.join(__dirname, "./js/mainjscarrusel.js");
    res.sendFile(filePath);
});
app.get("/organigrama.css", function (req, res) {
    var filePath = path.join(__dirname, "./css/organigrama.css");
    res.sendFile(filePath);
});

app.get("/organigrama.js", function (req, res) {
    var filePath = path.join(__dirname, "./js/organigrama.js");
    res.sendFile(filePath);
});


app.get("/biliografia.html", function (req, res) {
    var filePath = path.join(__dirname, "./PaginaWeb/relacionDocentes/biliografia.html");
    res.sendFile(filePath);
});


app.get("/FotosIEP.js", function (req, res) {
    var filePath = path.join(__dirname, "./js/main.js");
    res.sendFile(filePath);
});


app.get("/app.js", function (req, res) {
    var filePath = path.join(__dirname, "./js/app.js");
    res.sendFile(filePath);
});


app.get("/Matricula.html", function (req, res) {
    var filePath = path.join(__dirname, "./PaginaWeb/relacionDocentes/matricula.html");
    res.sendFile(filePath);
});


app.get("/biliografia.css", function (req, res) {
    var filePath = path.join(__dirname, "./css/biliografia.css");
    res.sendFile(filePath);
});
 

app.get("/datescivicas.js", function (req, res) {
    var filePath = path.join(__dirname, "./js/datescivicas.js");
    res.sendFile(filePath);
});

app.get("/bot.js", function (req, res) {
    var filePath = path.join(__dirname, "./js/bot.js");
    res.sendFile(filePath);
});

app.get("/estilosShowDate.css", function (req, res) {
    var filePath = path.join(__dirname, "./css/estilosShowDate.css");
    res.sendFile(filePath);
});


app.get("/estilosUbicacion.css", function (req, res) {
    var filePath = path.join(__dirname, "./css/estilosUbicacion.css");
    res.sendFile(filePath);
});


app.get("/ideario.css", function (req, res) {
    var filePath = path.join(__dirname, "./css/ideario.css");
    res.sendFile(filePath);
});



app.get("/matriculacssdesign.css", function (req, res) {
    var filePath = path.join(__dirname, "./css/matriculacssdesign.css");
    res.sendFile(filePath);
});

app.post("/validar", function (req, res) {
    const datos = req.body;
    let nombres = datos.nombre;
    let apellidos = datos.apellido;
    let email = datos.correo;
    let telefono = datos.telefono;
    let mensaje = datos.mensaje;
    let terminos = datos.terminos;

    let registrar = "INSERT INTO DatosPersonales (Nombre, Apellido, CorreoElectronico, Telefono, Mensaje) VALUES ('" + nombres + "','" + apellidos + "','" + email + "','" + telefono + "','" + mensaje + "')";

    if (terminos && nombres && apellidos && telefono && email && mensaje) {
        conexion.query(registrar, function (error) {
            if (error) {
                throw error
            } else {
                console.log("Datos normales");
                res.redirect('/');
            }
        });
    }
});

// // ------------------------   FECHAS CIVICAS    ---------------------------------------


app.get(
    "/api/dates/:current", (req, res) => {
        var request = req.params.current;
        conexion.query(
            "select NAMECAL, IMAGEN, DESCAL, DATE_FORMAT(DATECAL, '%d/%m/%Y') AS DATECAL from calendarie where DATECAL = '"+ request +"'",
        function (err, row, fields) {
            if (err) {
                throw err;
            } else if (row[0] != null) {
                res.json(
                    row[0]
                );
            }else{
                res.json(null);
            }
        }
        )
    }
)


app.listen(port, function () {
    console.log(`El servidor está funcionando en http://localhost:${port}`);
});



