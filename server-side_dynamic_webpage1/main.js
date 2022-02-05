var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res){
	var current_url = req.url;
	var queryData = url.parse(current_url, true).query;
	var title = queryData.id
	if (current_url == '/'){
	title = 'Welcome';
		} 
	var template = `<HTML>
	<BODY>
	This is test page. title is -> ${title}
	<ol>
	<li><a href="/?id=HTML">HTML</li>
	<li><a href="/?id=CSS">CSS</li>
	<li><a href="/?id=javaScript">JavaScript</li>
	</ol>
	</BODY>
	</HTML>
	`
	

	
	
	res.writeHead(200);
	res.end(template);
});
server.listen(3000);