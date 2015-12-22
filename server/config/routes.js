module.exports = function(app){

    app.get('/partials/*', function(req, res){
        res.render('../../public/partials/' + req.params[0]);
    });

    app.get('/app/feature/:id', function(req, res){
        res.render('feature');
    });

    // Angular kicks in
    app.get('/app', function(req, res){
        res.render('appStart');
    });

    app.get('*', function(req, res){
        res.render('index');
    });

}