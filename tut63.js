// console.log("umar hayat");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Navigation</title>
      <style>
          .navbar{
              background-color: antiquewhite;
              border-radius: 15px;
          }
          .navbar ul{
              overflow: auto;
          }
          .navbar input{
              border: 2px solid rgb(51, 133, 136);
              border-radius: 10px;
              padding: 4px 4px;
              width: 180px;
          }
          .navbar li{
              float: left;
              list-style: none;
              padding: 12px 4px;
              margin:  4px 4px;
          }
          .navbar li a:hover{
              color: rgb(40, 212, 218);
          }
          .search{
              float: right;
              padding: 12px ;
          }
  
          .navbar li a{
              text-decoration: none ;
              padding: 4px 4px;
              color: rgb(83 48 15)
          }
      </style>
    </head>
    <body>
      <nav class="navbar">
        <ul>
            <li><a href="#">Home</a> </li>
            <li><a href="#">About</a> </li>
            <li><a href="#">Services</a> </li>
            <li><a href="#">Contact us</a>  </li>
            <div class="search"><input type="text" name="search" id="search" placeholder="search this website"></div>
        </ul>                                            
      </nav>
    </body>
  </html>
  `);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});