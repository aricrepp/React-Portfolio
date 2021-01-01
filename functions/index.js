const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors')({origin: true});
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
}));

exports.emailMessage = functions.https.onRequest((req, res) => {
    const { name, email, message } = req.body;

    res.set('Access-Control-Allow-Origin', '*');
    
    if (req.method === 'OPTIONS') {
        res.set('Access-Control-Allow-Methods', 'GET');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
    } else {
        return cors(req, res, () => {
            const text = `<div>
                <h4>Information</h4>
                <ul>
                <li>
                    Name - ${name || ""}
                </li>
                <li>
                    Email - ${email || ""}
                </li>
                </ul>
                <h4>Message</h4>
                <p>${message || ""}</p>
            </div>`;
    
            const mailOptions = {
                from: email,
                replyTo: email,
                to: gmailEmail,
                subject: `${name} just messaged me from my website`,
                text: text,
                html: text
            }
        
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error.message);
                }
                res.status(200).send({
                    message: "success"
                })
            });
        }).catch(() => {
            res.status(500).send("error");
        });
    }
    
});