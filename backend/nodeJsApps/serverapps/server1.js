//creating the first server

const http=require('http');

const server=http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("Hello, this is server1!")
    response.end();
})

const port = 3000;
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)})
    