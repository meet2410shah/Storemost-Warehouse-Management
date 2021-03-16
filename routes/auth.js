const express = require('express');
const router = express.Router();

const {authorize}=require("../controllers/auth/auth_main");


router.post("/admin",authorize);


module.exports = router;
