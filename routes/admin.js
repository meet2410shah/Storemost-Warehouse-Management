const express = require('express');
const router = express.Router();

const {register_admin}=require("../controllers/admin/register_admin")

router.post('/register',register_admin)

module.exports = router;