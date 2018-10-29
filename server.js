const http = require('http');

http.creatServer(function(res, req){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end(JSON.stringify({hello node.js}))；
}).listen(3389);
console.log('node.js server is running');