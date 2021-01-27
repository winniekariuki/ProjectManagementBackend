const express = require("express");
const router = express.Router();
const account = require("../controllers/account");
const auth = require("../middleware/auth");

  
// Create a new account
router.post("/account",auth, account.create);
router.get("/account", auth,account.findAll);
router.get("/account/:id", auth,account.findOne);

module.exports = router;