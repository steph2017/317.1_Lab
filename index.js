const http = require("http");
// import http from 'http'; // (Do this if you want to convert from commonJS to ES module. You would also add "type": "module" to a line in the josn file)

http
    .createServer((req, res) => {
        console.log(req);
        console.log(res);
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");

        switch (req.url) {
            case "/":
                res.write("Hello World");
                break;
            case "/test":
                res.write("You've reached the test endpoint.");
                break;
            default:
                res.statusCode = 404;
                res.write("Error: 404 Not Found");
                break;
        }
        res.end();
    }).listen(3001, () => {
        console.log(`Server is running.`);
    });