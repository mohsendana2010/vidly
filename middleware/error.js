module.exports = function(err, req, res, next){
    //log exeption
    res.status(500).send('Something failed');
    // next();
}