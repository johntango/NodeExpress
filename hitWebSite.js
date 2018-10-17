// lets make an http.request to another machine
function  hitWebSite(url){
    var http = require('http');
    app.get('/mit', function(req, res) {
        var options = {
            host: 'www.mit.edu',
            path: ''
    };

    var callback = function(response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function(chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function() {
            res.send(str);
            //console.log(str);
        });
    };

    http.request(options, callback).end();


    });
}
export default hitWebSite;