const router = require('express').Router();

// Controllers
const { get } = require('../controllers/admin/');

const func1 = (req, res, next) => {
  console.log('I am first');
  next();
}

const func2 = (req, res) => {
  console.log('I am second');
}

router.get('/', func1, func2);

module.exports = router;