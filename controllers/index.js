const Blague = require("../models/Blagues");

const controllerBlague = {
  find: async (req, res) => {
    try {
      console.log("GET /blagues");
      if (req.query.search) {
        const query = req.query.search;
        const data = await Blague.findAll();
        const result = data.filter((blague) =>
          blague.question.toLowerCase().includes(query.toLowerCase())
        );
        if (result.length === 0) {
          return res.status(404).json({ error: "No matching jokes found." });
        }
        res.status(200).json({ result });
      } else {
        const data = await Blague.findAll();
        res.status(200).json({ result: data });
      }
    } catch (error) {
      console.error("Error in find:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching jokes." });
    }
  },

  create: async (req, res) => {
    try {
      console.log("POST /blagues", req.body);
      const data = await Blague.create(req.body);
      res.status(201).json({ message: "Votre blague a été ajoutée", data });
    } catch (error) {
      console.error("Error in create:", error);
      res
        .status(500)
        .json({ error: "An error occurred while adding the joke." });
    }
  },

  findById: async (req, res) => {
    try {
      console.log("GET /blagues/:id", req.params.id);
      const id = req.params.id;
      if (isNaN(id)) {
        return res.status(400).json({ error: "Don't use text for id" });
      }
      const blague = await Blague.findByPk(id);
      if (!blague) {
        return res.status(404).json({ error: "ID not found ..." });
      }
      res.status(200).json({ result: blague });
    } catch (error) {
      console.error("Error in findById:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching the joke." });
    }
  },

  random: async (req, res) => {
    try {
      console.log("GET /blagues/random");
      const data = await Blague.findAll();
      const randomBlague = data[Math.floor(Math.random() * data.length)];
      res.status(200).json({ result: randomBlague });
    } catch (error) {
      console.error("Error in random:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching a random joke." });
    }
  },
};

module.exports = controllerBlague;
