const express = require("express");
const router = express.Router();
const controllerBlague = require("./../controllers/index");
//const {random} = require('./..:controllers/index')

router.get("/", (req, res) => {
  res.status(200).json({ success: "RACINE API" });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: "bounty" });
});

router.get("/blagues", controllerBlague.find);

router.post("/blagues", controllerBlague.create);

router.get("/blagues/:id", controllerBlague.findById);

router.get("/blagues/random", controllerBlague.random);

module.exports = router;
