const film = require("../controllers/films.controller");
const router = require("express").Router();
const auth = require("../auth/authorization");

router.get("/", auth, film.findAll);
router.get("/:id", auth, film.findOne);
router.post("/", auth, film.create);
router.patch("/", auth, film.update);
router.delete("/:id", auth, film.delete);

module.exports = router;