const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL}/${id}`)
    .then((result) => result.data)
    .then(({ name, gender, origin, status, image, species }) => {
      let character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      return res.status(200).json(character);
    })
    .catch((error) => res.status(500).send(error.message));
};

module.exports = {
  getCharById, // Asegúrate de cerrar correctamente el objeto de exportación aquí.
};
