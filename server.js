//set env variables on host in production
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

//connect to DB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
const db = mongoose.connection;
db.once("open", () => console.log("Connected to mongodDB"));
db.on("error", err => console.log(err));

//parse form to json
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//routes
app.use("/form", require("./api/form"));
app.use("/blog", require("./api/blog"));
app.use("/admin/register", require("./api/register"));
app.use("/admin/login", require("./api/login"));
app.use("/admin/user", require("./api/user"));

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`listening at port ${PORT}`));
