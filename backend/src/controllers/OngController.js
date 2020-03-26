const crypto = require("crypto");
const connection = require("../database/connection");

class OngController {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  }

  async create(req, res) {
    const { name, email, celular, city, state } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      name,
      email,
      celular,
      city,
      state
    });

    return res.json({ id });
  }
}

module.exports = new OngController();
