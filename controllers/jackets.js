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
// Handle jackets create on POST.
exports.jackets_create_post = async function(req, res) {
console.log(req.body)
let document = new jackets();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"jacket_name":"goat", "jacket_brandjacket_brand":12, "cost":"large"}
document.jacket_name = req.body.jacket_name;
document.jacket_brand = req.body.jacket_brand;
document.jacket_brandjacket_brand = req.body.jacket_brandjacket_brand;
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
// for a specific jackets.
exports.jackets_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await jackets.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    // Handle jackets update form on PUT.
exports.jackets_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await jackets.findById( req.params.id)
// Do updates of properties
if(req.body.jacket_name)
toUpdate.jacket_name = req.body.jacket_name;
if(req.body.jacket_brand) toUpdate.jacket_brand = req.body.jacket_brand;
if(req.body.cost) toUpdate.cost = req.body.cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// Handle jackets delete on DELETE.
exports.jackets_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await jackets.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
    exports.jackets_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await jackets.findById( req.query.id)
    res.render('jacketsdetail',
    { title: 'jackets Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a jackets.
// No body, no in path parameter, no query.
// Does not need to be async
exports.jackets_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('jacketscreate', { title: 'jackets Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a costume.
// query provides the id
exports.jackets_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await jackets.findById(req.query.id)
    res.render('jacketssupdate', { title: 'jackets Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
    exports.jackets_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await jackets.findById(req.query.id)
    res.render('jacketsdelete', { title: 'jackets Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
   