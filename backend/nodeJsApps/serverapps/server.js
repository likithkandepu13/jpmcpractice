//express server.js
// express is a third-party library that simplifies the process of creating a server in Node.js
// we need to install it first
// use  npm install express
const express = require('express');
const app = express(); // app is a function that creates an instance of the express application
const port = 3000; // port number where the server will listen

app.get("",(request,response)=>{
    response.setHeader('Content-Type', 'text/plain');
    response.send("Hello, this is the Express server!");
})
app.get("/about",(request,response)=>{
    response.setHeader('Content-Type', 'text/plain');
    response.send("Hello, this is the Express server about page!");
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});