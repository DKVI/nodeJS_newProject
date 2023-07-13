const express = require("express");
const router = express.Router();

const userController = require("../app/controllers/RegisterController");

router.get("/", userController.index);
router.post("/done", userController.store);

module.exports = router;
