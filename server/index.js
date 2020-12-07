// starting point of server application
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// initialise the app
const app = express();

// general setup

// extend image size
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// connect seerver application to a .db
// mongo db atlas

const CONNECTION_URL =
  "mongodb+srv://softspike:xxxxx@cluster0.mctwg.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// connect to a db
/////////////////////////////////////
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  // if the connection to the db isnt successful
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
/////////////////////////////////////
