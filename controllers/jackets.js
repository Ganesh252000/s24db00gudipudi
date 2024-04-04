var jackets = require('../models/jackets');
// List of all jackets
exports.jackets_list = async function(req, res) {
    try{
    thejackets = await jackets.find();
    res.send(thejackets);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

   // VIEWS
// Handle a show all view
exports.jackets_view_all_Page = async function(req, res) {
try{
thejackets = await jackets.find();
res.render('jackets', { title: 'jackets Search Results', results: thejackets });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
    

// for a specific jackets.
 exports.jackets_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: jackets detail: ' + req.params.id);
};
// Handle jackets create on POST.
// Handle Costume create on POST.
exports.jackets_create_post = async function(req, res) {
console.log(req.body)
let document = new jackets();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.jacket_name = req.body.jacket_name;
document.jacket_brand = req.body.jacket_brand;
document.cost = req.body.cost;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle jackets delete from on DELETE.
exports.jackets_delete = function(req, res) {
res.send('NOT IMPLEMENTED: jackets delete DELETE ' + req.params.id);
};
// Handle jeckets update form on PUT.
exports.jackets_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: jackets update PUT' + req.params.id);
};
