const express = require("express");

const app = express();

const cors = require("cors");
const connection = require("./db_config");

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// test de la connection
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
  } else {
    console.log(
      `connected to database with threadId :  ${connection.threadId}`
    );
  }
});

// route GET

app.get("/animals", (req, res) => {
  connection.query("SELECT * FROM animal", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    } else {
      res.status(200).json(result);
    }
  });
});

// route POST

app.post("/user", (req, res) => {
  const { animalName, animalBio, animalProfession, animalAge, animalType } =
    req.body;
  connection.query(
    "INSERT INTO animal (animalName, animalBio, animalProfession, animalAge, animalType) VALUE (?,?,?,?,?)",
    [animalName, animalBio, animalProfession, animalAge, animalType],
    (error, result) => {
      if (error) {
        res.status(500).send("Error saving the new animal");
      } else {
        const id = result.insertId;
        const createdUser = {
          id,
          animalName,
          animalBio,
          animalProfession,
          animalAge,
          animalType,
        };
        res.status(201).json(createdUser);
      }
    }
  );
});

// ready to export
module.exports = app;
