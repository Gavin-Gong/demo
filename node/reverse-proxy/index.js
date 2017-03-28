let httpProxy = require('http-proxy');
let http = require('http');

// let options = {
// 	target: 'http://localhost:9000',
// };
// let proxy = httpProxy.createProxyServer(options);


let doubanApi = 'https://api.douban.com/v2/movie/subject/1764796'
let proxy = httpProxy.createProxyServer({
	target:doubanApi,
	changeOrigin: true,
});

http.createServer(function (req, res) {
	console.log('gg');
  proxy.web(req, res);
}).listen(9000);