import dbConnect from "../config/dbConnect.js";

class HotelController {
  static buscarHotel = (req, res) => {
    dbConnect.query(
      `SELECT * FROM hoteis ORDER BY id ASC`,
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  };

  static buscarHotelPorId = (req, res) => {
    const id = req.params.id;

    dbConnect.query(
      `SELECT * FROM hoteis WHERE id = ${id}`,
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  };

  static cadastrarHotel = (req, res) => {
    const {  name, pais, estado, cidade } = req.body;

    dbConnect.query(
      "INSERT INTO hoteis ( name, pais, estado, cidade) VALUES ($1, $2, $3, $4)",
      [ name, pais, estado, cidade]
    );

    res.status(201).send({
      message: "Hotel adicionado com sucesso!",
      body: {
        cadastrarhotel: { name, pais, estado, cidade },
      },
    });
  };

  static atualizarHotel = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, pais, estado, cidade } = req.body;

    dbConnect.query(
      "UPDATE hoteis SET name = $1, pais = $2, estado = $3, cidade = $4 WHERE id = $5",
      [name, pais, estado, cidade, id],

      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`Hotel ${id} atualizada com sucesso.`);
      }
    );
  };

  static deletarHotel = (req, res) => {
    const id = req.params.id;

    dbConnect.query("DELETE FROM hoteis WHERE id = $1", [id]);

    res.status(200).send({ message: "Hotel deletado com sucesso", id });
  };
}

export default HotelController;
