const express = require("express");
const { Gym, Trainer, Pokemon, PokemonTrainer } = require("./models")

const app = express()
const port = 3000

app.get("/", (req, res) => {
  Trainer.findAll({
    include: Pokemon
  })
    .then(data => {
      console.log(data)
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
})

app.listen(port, () => {
  console.log("app listening on port", port)
})