var express = require('express');
var passport = require('passport');
const jackets_controlers= require('../controllers/jackets');
var router = express.Router();
/* GET jackets */
router.get('/', jackets_controlers.jackets_view_all_Page );
/* GET detail jackets page */
router.get('/detail', jackets_controlers.jackets_view_one_Page);
router.get('/create', jackets_controlers.jackets_create_Page);
//GET create update page */
//router.get('/update', jackets_controlers.jackets_update_Page);
//router.get('/delete', jackets_controlers.jackets_delete_Page);
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
router.post('/login', passport.authenticate('local'), function(req, res) {
res.redirect('/');
});
router.get('/update',secured, jackets_controlers.jackets_update_Page);
router.get('/delete', jackets_controlers.jackets_delete_Page);

module.exports = router;

