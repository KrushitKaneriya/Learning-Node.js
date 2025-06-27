const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/source-code'){
        res.write('This is a Source Code Page');
        res.end();
    }

    if(req.url === '/contact'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>This is a Contact Page</h1>');
        res.end();
    }
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});