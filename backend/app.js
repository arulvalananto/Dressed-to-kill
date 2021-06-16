const express = require("express");
const cors = require("cors");
// const path = require("path");

const app = express();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res, next) => {
  res.json({ message: "it is worked" });
});

app.post("/api/v1/payment", (req, res, next) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (err, res) => {
    if (!err) {
      res.status(200).json({ success: res });
    } else {
      res.status(400).json({ error: err });
    }
  });
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));

//   app.use("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build", "index.html"));
//   });
// }

module.exports = app;
