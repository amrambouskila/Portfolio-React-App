require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;
const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;
const emailReceiver = process.env.EMAIL_RECEIVER;
console.log(`${emailUser} - ${emailPassword}`);
app.use(bodyParser.json());

const corsOptions = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'], // Add any other origins you need
};

app.use(cors(corsOptions));

// Route to handle form submissions
app.post('/send-email', (req, res) => {
    console.log(`The active port is ${PORT}`);
    const { name, email, phone, subject, message } = req.body;
    console.log('Received form data:', req.body);

    // Create a transporter using Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailUser, // Your email address
            pass: emailPassword, // Your email password or an app-specific password
        },
    });

    // Construct the email message
    const mailOptions = {
        from: email,
        to: emailUser, // Your email address where you want to receive messages
        subject: subject,
        text: `
            Name: ${name}\n
            Email: ${email}\n
            Phone: ${phone}\n\n
            Message: ${message}
        `,
    };

    // Send the email using the transporter
    console.log('Mail options:', mailOptions);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
