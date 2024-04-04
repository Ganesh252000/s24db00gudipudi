var express = require('express');
const jackets_controlers= require('../controllers/jackets');
var router = express.Router();
/* GET jackets */
router.get('/', jackets_controlers.jackets_view_all_Page );
module.exports = router;
