console.log("-----------------------------------------**");
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
//http module
const http = require('node:http');
http.createServer((req, res) => {//don't swap the order of the parameters
    console.log(req);//all the information about the request  -------> if we open the server on localhost:3000 on the browser
    console.log(res);//all the information about the response
    
}).listen(3000,"127.0.0.1",511 ,() => {
    console.log('server is running on port :::::: 3000');//the callback function is called when the server is running (as indicator to backend developer)
});

//listen(port , hostname , backlog , callback function)
//hostname is the ip address of the server or the domain name of the server ,by default it is localhost (((in this case we use 127.0.0.1:3000)))
//backlog is the maximum number of pending connections ,by default it is 511 (((waiting list depend on the bandwidth of the server))))


//second way 
let port =3001;
const server = http.createServer((req, res) => {
    res.write('hello world and wellcome to my server'); //send the response on port 3001
    res.end();
});
server.listen(port,() => {
            console.log(`the server is running on port ::::::${port}`);} );//the port is required 

//then if we have more than one application using the same port (handeling the error)
server.on('error' ,(e)=>{
    console.log({e});
    if(e.code === 'EADDRINUSE'){
        console.log('the port is already in use');
        port++;
        server.listen(port, () => {
            console.log(`the server is running on port ::::::${port}`);
        });
    }
})  

const {log} = console; //this is a shortcut to console.log
log('hello world');

//