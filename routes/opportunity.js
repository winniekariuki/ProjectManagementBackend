const express = require("express");
const router = express.Router();
const opportunity = require("../controllers/opportunity");
const auth = require("../middleware/auth");
  
// Create a new opportunity
router.post("/opportunity",auth, opportunity.create);
router.get("/opportunity",auth,opportunity.findAll);
router.get("/opportunity/:id",auth, opportunity.findOne);

module.exports = router;