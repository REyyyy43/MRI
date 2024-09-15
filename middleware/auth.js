const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar el transporte de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes usar otro servicio como Outlook, Yahoo, etc.
    auth: {
        user: 'tu-email@gmail.com',
        pass: 'tu-contraseña', // Recuerda que debes usar contraseñas de aplicaciones o tokens si usas 2FA
    },
});

// Ruta para procesar el envío de formulario
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
            return res.status(500).send(error.toString());
        }
        res.send('Correo enviado correctamente');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});