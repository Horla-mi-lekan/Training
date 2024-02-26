const http = require("http");

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.end("Welcome to the Home Page");
    }
      
    else if(req.url === "/about"){
        res.end("You are on the landing page");
    }
    else{
    res.end(
        `<h1>Oops</h1>
        <p>You have enter a wrong Address</p>
        <a href ="/">Back Home</a>
        `
    )
    }
});

server.listen(5000)