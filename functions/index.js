const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin')
const cors = require('cors')({origin: true});
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

admin.initializeApp();

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: gmailEmail,
    pass: gmailPassword,
    },
})

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {  

        const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `${req.body.name} just messaged me from my website`,
        text: req.body.message,
        html: `<p>${req.body.message}</p>`,
        }

        return mailTransport.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    })
    
})