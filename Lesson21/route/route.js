const http = require("http");

const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    if (request.url === "/") {
      response.write("This is Home Page");
    } else if (request.url === "/about") {
      response.write("This is About Page");
    } else {
      response.write("404 Not!");
    }
  }
  else{
      switch (request.method) {
          case "POST":
            response.write("POST Method!");
              break;
              case "PUT":
                response.write("PUT Method!");
                  break;
                  case "DELETE":
                    response.write("DELETE Method!");
                      break;
      
          default:
            response.write("OTHER Method!");
              break;
      }
  }
  response.end();
});

server.listen(3000);
