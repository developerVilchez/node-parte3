const http =  require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server =  http.createServer((req, res)=>{
	res.writeHead(200, {"Content-Type":"text/plain"});
	const params = url.parse(req.url,true).query;
	const input = params.number;
	console.log(input);

	//Generic js method that will create our random number that gets passed back to the caller
	const numInput = new Number (input);
	const numOutput = new Number (Math.random()*numInput).toFixed(0);

	res.write(numOutput);
	res.end();
});

server.listen(port,hostname,()=>{
	console.log(`Server Started ${port} http://127.0.0.1:3000/?number=40`);
})
