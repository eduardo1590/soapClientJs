var soap = require('soap');
var url = 'http://localhost:8080/serviciosweb/TestSoapService?wsdl';
var args = {name: 'Eduardp'};
soap.createClient(url, function(err, client) {
    client.MyFunction(args, function(err, result) {
        console.log(result);
    });
});