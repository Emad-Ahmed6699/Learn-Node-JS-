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
            console.log(`the server is running on port ::::::${port}`);} );//the port is required as a parameter

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


console.log("------------------------------------");
//http routing
const server2 = http.createServer((req, res) => {
    res.write('hello world and wellcome to my server'); //string
    res.write('<h1>hello world and wellcome to my server</h1>'); //html
    res.write(JSON.stringify({name:'emad'}));//json
    res.end();//we can write string in res.end() but it is not recommended coz the end of the response finished
});

const server3 = http.createServer((req, res) => {
    res.write('hello world and wellcome to my server'); //we should tell the browser the type of the response so we use res.writeHead()
    res.writeHead(200, {'Content-Type': 'text/html'});//this is the status code and the type of the response (tell the browser the type is html)
    res.write('<h1>hello world and wellcome to my server</h1>'); 
    res.writeHead(200, {'Content-Type': 'application/json'});//this tell the browser the type is json
    res.write(JSON.stringify({name:'emad'}));
    res.end();
});

//you will see the content type of response in the (network tab) in the developer tools

//the two main imprortant parameter in req information is url and method
const server4 = http.createServer((req, res) => {
    log(req.url);
    const {url, method} = req;//destructuring =>take the url and method from req
    //console.log({url, method})//display the url and method
    if(url === '/'&& method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1> wellcome to my server</h1>'); 
        res.write('<h1> landing page</h1>'); 
        res.end();
    }
    else if(url === '/about' && method === 'POST'){ //if the method is post the default page will return 404(last else)
        //so we need to handle the post request using ((((((((((postman)))))))))) it test the post request 
        //its important to tell the browser the type of the response using res.writeHead to be able to use json in postman
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({name:'emad', age: 20})); //stringify convert the object to a string ,so the return type is string
        res.end();
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'}); //
        res.write(' page not found'); 
        res.end();
    }

});

server4.listen(3002,() => {
    console.log(`the server is running on port ::::::3002`);});
















    //          npm init
    //this command will create a package.json file in the current directory
    //this package.json file will contain the dependencies of the project

    //to install a package without asking for alot of questions
    //use       npm init -y

    //to run a script in package.json file
    //use       npm run <script name>             ---> npm run start:dev

    //must edit in scripts in package.json ,the script name must be the same as the script name in package.json
    /*
    "scripts": {
    "start:dev": "node --watch index2.js"
    },
    */

    //the important thing is Keywords ,it is used to search for packages in npm ,,, so write in it ["node","js"]
    //the important thing is Description ,it is used to search for packages in npm



    //to dwonload a express package
    //use       npm install express     or    npm i express 
    //its important to install package.json file first using {  npm init  }
    //1-you will see the node_modules folder in the current directory and 2-package-lock.json file
    //3-and will see            
    // "dependencies": {
    //"express": "^5.2.1" } 
/////at end of package.json file



// the node_modules folder is large for a uploading on server so we will use package-lock.json file (that hold the dependencies and all info about express version and so on)
//use  {    npm i     } to install node_modules folder
//try to remove node_modules folder and use {    npm i     } 

//package-lock.json file is a file that hold the dependencies and all info about express package


//npm init -y 
//update package.json file (scripts)
//npm run start:dev

//npm i express
