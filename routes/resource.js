var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var jackets_controller = require('../controllers/jackets');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// jackets ROUTES ///
// POST request for creating a jackets.
router.post('/jackets', jackets_controller.jackets_create_post);
// DELETE request to delete jackets.
router.delete('/jackets/:id', jackets_controller.jackets_delete);
// PUT request to update jackets.
router.put('/jackets/:id', jackets_controller.jackets_update_put);
// GET request for one jackets.
router.get('/jackets/:id', jackets_controller.jackets_detail);
// GET request for list of all jackets items.
router.get('/jackets', jackets_controller.jackets_list);
module.exports = router;