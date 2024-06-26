const router = require("express").Router();

const authController = require("./controllers/auth");
const vehicleController = require("./controllers/vehicle");

router.use("/user", authController);
router.use("/vehicles", vehicleController);

module.exports = router;
