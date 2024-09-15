require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// Importa pregRouter
const pregRouter = require('./routes/pregRouter.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny')); // Mantenemos el logger de Morgan

// Configurar el transporte de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes usar otro servicio como Outlook, Yahoo, etc.
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Ruta para manejar el envío de correos
app.post('/send-email', (req, res) => {
    const { nombre, correo, telefono, asunto, direccion, mensaje } = req.body;

    const mailOptions = {
        from: correo,
        to: 'ReinaIsabella21@gmail.com',
        subject: `Nuevo mensaje de ${nombre}: ${asunto}`,
        text: `Teléfono: ${telefono}\nDirección: ${direccion}\n\nMensaje:\n${mensaje}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error al enviar el correo');
        }
        res.send('Correo enviado correctamente');
    });
});

// Rutas frontend
app.use('/', express.static(path.resolve('views', 'Home')));
app.use('/Contacto', express.static(path.resolve('views', 'Contacto')));
app.use('/Servicio', express.static(path.resolve('views', 'Servicio')));
app.use('/Resena', express.static(path.resolve('views', 'Resena')));
app.use('/whoIsRIS', express.static(path.resolve('views', 'whoIsRIS')));
app.use('/images', express.static(path.resolve('img')));
app.get('/faq', (req, res) => {
    res.sendFile(path.resolve('views', 'Home', 'faq.html'));
});

// Rutas backend
app.use('/api/Preg', pregRouter);

// Configura el puerto para que sea 3001
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;