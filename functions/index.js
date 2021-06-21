const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51J3geASA7jiGiAi2fkTxXXZXZzNU65hVI2EuNzY0hysRQOJBb0LY8n3QMCx1cb50N3JKIhGJ9vBzVEQulSoJVNw300AbtJSCLz');

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get('/',(request,response) => {
    response.status(200).send("Hello World");
});

app.post('/payments/create',async (req,res) => {
    const total = req.query.total;
    console.log('Payment Request Recieved :) : ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });


    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
});

exports.api = functions.https.onRequest(app);