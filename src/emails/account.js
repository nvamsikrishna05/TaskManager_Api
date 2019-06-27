'use strict';
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'n.vamsikrishna001@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the Task app ${name}. Let me know how's your experience using the app.`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'n.vamsikrishna001@gmail.com',
        subject: 'Sorry to see you go.',
        text: `Hello ${name}, Thanks for using the Task app and feeling bad seeing you go. Please take a moment to tell us why you're leaving us. Thanks`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}