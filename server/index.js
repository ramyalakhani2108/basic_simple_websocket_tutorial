import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log("Server listening....");
}); //returns server instance , we need it because we need to run http server and

const wss = new WebSocketServer({ server });

//if port is 8080 then we are passing http request and also our web socket server request
wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log("data from client :%s ", data); // this sends data into buffer if we need data into string than we need to add %s 
        ws.send("thanks");
    });
});

// the function will run special object  which means a connection for specific client, it also called stream
// in above function WS means 