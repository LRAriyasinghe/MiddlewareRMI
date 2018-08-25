const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    if ((hostname=='localhost')&&(port=="9999")){
        // *******
    }
});

// function gcd 
function GCD(n1,n2) {
   if (n1 == 0 || n2 == 0)
        return 0;

    // base case
    if (n1 == n2)
        return n1;

    // a is greater
    if (n1 > n2)
        return GCD(n1-n2, n2);
    return GCD(n1, n2-n1);
}

// function fibbonachi
function LCM(n1,n2){
    return (n1*n2)/GCD(n1, n2);
  }