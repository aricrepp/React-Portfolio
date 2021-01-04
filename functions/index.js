const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require("cors")({origin: true});
admin.initializeApp();

const sgMail = require('@sendgrid/mail')

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

exports.genericEmail = functions.https.onCall((data, context) => {

    res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:4000');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    return cors(req,res, () => {
        const msg = {
        to: 'aricmrepp@gmail.com',
        from: data.email,
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: data.name,
            name: data.message,
        },
    };

    sgMail.send(msg);

    res.status(200).send('success')
    }).catch((err) => {
        res.status(500).send()
    })
    

});