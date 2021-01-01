const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const sgMail = require('@sendgrid/mail')

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

exports.genericEmail = functions.https.onCall(async (data, context) => {

    const msg = {
        to: 'aricmrepp@gmail.com',
        from: data.email,
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: data.name,
            name: data.message,
        },
    };

    await sgMail.send(msg);

    return { success: true };

});