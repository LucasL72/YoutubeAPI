const express = require("express");
const router = express.Router();

const controller = require("./controllers/controller")

router.route("/")
    .get(controller.home);


router.route("/yt")
    .get(controller.youtube)
    .post(controller.youtubesearch);

module.exports = router