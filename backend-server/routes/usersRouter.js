const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController.js");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

/* users listing. */
router.post("/signup", upload.single("profile_image"), UserController.signUp);
router.post("/signin", UserController.signIn);
router.delete("/", UserController.withdrawal);
router.get("/", UserController.getUserById);

router.patch("/info", UserController.updateUserInfo);
router.patch("/password", UserController.updateUserPassword);

module.exports = router;