const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.static('public'));
app.use(express.json()); //for handling json data
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Hamlin/index.html');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/Hamlin/index.html');
});


app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/Hamlin/contact.html');
});

app.get('/blogs', (req, res) => {
    res.sendFile(__dirname + '/public/Hamlin/blogs.html');
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/public/Hamlin/gallery.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/Hamlin/about.html');
});

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        secure: false, // use SSL
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'hamlinhospital@gmail.com',
        subject: `Message from ${req.body.email}`,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');  // Sending plain text response
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');  // Sending plain text response
        }
    });
    
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
