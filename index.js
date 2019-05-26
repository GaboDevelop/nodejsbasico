const server = require("http").Server();
const io = require("socket.io")(server);

const port = require("./config").SERVER_PORT;

const banner = `
***********************
    Basic Node.js course
        course project
    tic tac toe Server
***********************
Status: Online
Listening on port:${port}
`;

io.on("connection", socket => {
  socket.on("register", user => {
    console.info(`User registed: ${user.name}`);
  });
});

server.listen(port, () => {
  console.info(banner);
});
