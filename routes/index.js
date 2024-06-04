const express = require("express");
const router = express.Router();
const controllerBlague = require("../controllers/index");

router.get("/", (req, res) => {
  console.log("GET /");
  res.status(200).json({ success: "RACINE API" });
});

router.post("/", (req, res) => {
  console.log("POST /");
  res.status(200).json({ success: "bounty" });
});

router.get("/blagues", controllerBlague.find);

router.post("/blagues", controllerBlague.create);

router.get("/blagues/random", controllerBlague.random);

router.get("/blagues/:id", controllerBlague.findById);

module.exports = router;
