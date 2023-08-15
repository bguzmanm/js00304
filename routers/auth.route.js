const auth = require("../controllers/auth.controller");
const router = require("express").Router();

router.post("/signUp/", auth.singUp);
router.post("/signIn/", auth.singIn);

module.exports = router;