const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
"sk_test_51KiikgKNjdKxMF9bsOEBgDwZNsFn4Or0OlecgSC2r7IArx2J" +
    "Kv4G6iL9uEU0tuluz9Mmt8YCvIczGSCYVqZzTamB00Z02zFWte"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("안녕"));

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log(" payment.js에서 가져온 total의 양은 다음과 같다!!  ", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-3a83c/us-central1/api