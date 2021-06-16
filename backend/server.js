const app = require("./app");

if (process.env.NODE_ENV !== "production")
  require("dotenv").config({ path: "./.env" });

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Listening on Port 5000");
});
