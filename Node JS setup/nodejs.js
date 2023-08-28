const http = require("http");

http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>HelloWorld</h1>");
    response.end();

}).listen(8700);
console.log("Listening at port http://localhost:8700/");