//node js consist of 3 main parts
//1. core modules (built-in modules)
//3. custom modules (local modules)
//2. third party modules (external modules) ==> we can install third party modules using <-npm-> or <-yarn->

//built-in modules
// 1. path ✅
// 2. events ✅
// 3. fs ✅
// 4. stream ✅
// 5. http ✅
// 6. os ✅
// 7. url
// 8. util
// 9. zlib
// 10. crypto
// 11. net
// 12. tls

//external modules
//1. express
//2. mongoose
//3. mongodb
//4. socket.io
//5. axios
//6. cheerio
//7. puppeteer

//npm
//1. npm init
//2. npm install
//3. npm uninstall
//4. npm update

//yarn
//1. yarn init
//2. yarn install
//3. yarn uninstall
//4. yarn update

//global modules
//1. npm install -g
//2. yarn global add

//local modules
//1. npm install
//2. yarn add

//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//

//to run a js file we use node index.js
//to run a js file in watch mode we use node --watch index.js ✅

//path module
//path module : we use import keyword to import path module or require keyword to require path module
//import vs require
//import keyword is used in es6 modules (best practice)
//require keyword is used in commonjs moduls and es5 modules
//but we will use require keyword for the beginning

const path = require('node:path');              //this means that we are importing path module

console.log(path.sep);//separator
console.log(__dirname);//path of the current directory
console.log(__filename);//path of the current file
console.log(path.extname(__filename));//extension name of the current file
console.log(path.basename(__filename));//base name of the current file
console.log(path.dirname(__filename));//directory name of the current file
console.log("-----------------------------------------");
console.log(path.parse(__dirname));//convert the path of the current directory to an object
console.log(path.parse(__filename));//convert the path of the current file to an object
console.log(path.format({
    root: 'D:\\',
    dir: 'D:\\Backend .Net Developer\\Node JS',
    base: 'fundamentals',
    ext: '',
    name: 'fundamentals'
}));//convert an object to a path(string)
console.log("-----------------------------------------");

//relative path vs absolute path
//relative path :         ./data.txt
//absolute path :         c:\users\emad ahmed\desktop\backend .net developer\node js
//✅ we use store the relative path in a database and we use the absolute path to read the file

//join : concatenate the relative path with the absolute path to get the path of the current file
console.log(path.join(__dirname, './data.txt'));//join the path of the current directory with the path of the current file
console.log(path.join(__dirname, 'index.js', 'index.html'));

//resolve : resolve the relative path to an absolute path
console.log(path.resolve(__dirname, './data.txt'));//resolve the relative path to an absolute path


console.log("-----------------------------------------");
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//

//events module
const EventEmitter = require('node:events'); //class 
const event = new EventEmitter();//create an instance of the EventEmitter class

event.on('click', () => {
    console.log('omda');
});
event.on('click', () => {
    console.log('omda 2');
});
event.emit('click');// emit an event --> call all the listeners



//example sign up 
let users = []
event.on('sendmail', async (email) => {
    console.log(`email received `);
    await Sendmail(email);
    console.log(`email done `);
})
/*async*/ function SignUp(email, password) {
    users.push({
        email,
        password
    });
    //await Sendmail(email);//stay untill the function is finished including the timeout

    //but we need to be display the users to the frontend ,then five second to send the email 
    //so we use event.emit('sendmail' , 'emad')
    event.emit('sendmail', email);
    console.log(users); //excuted after 5 seconds 
}
function Sendmail(email) {
    return new Promise((r, j) => { // use promise when you want to wait for something
        setTimeout(() => { // method that will be executed after 5 seconds (metheod in setTimeout is a callback function)
            console.log(`email sent to ${email}`);
            r();//resolve : mean that the promise is resolved
        }, 5000);//5 seconds
    })
}
 /*SignUp('emad' , '123456');*/  //(((((call the function to understand the code))))))





//***the code by default is synchronous but we can make it asynchronous by using promises and async await***



console.log("-----------------------------------------");
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
//fs module

const fs = require('node:fs');
//to read a file we need a path
const path2 = require('node:path');
const sourcepath = path2.resolve('./data.txt');//resolve the relative path to an absolute path
console.log(sourcepath);
const filedata = fs.readFileSync(sourcepath, {encoding:'utf-8' , flag : 'r'});//read the file
console.log(filedata);                     //{encoding:'utf-8' , flag : 'r'} is options as object so we use {}
//to write a file we need a path
const destinationpath = path2.resolve('./data2.txt');
console.log(destinationpath);
fs.writeFileSync(destinationpath, 'hello world' , {flag : 'w'});//write the file

//to append a file we need a path
const destinationpath2 = path2.resolve('./data2.txt');
console.log(destinationpath2);
fs.appendFileSync(destinationpath2, '\nhello world 2' , {flag : 'a'});//append the file



console.log("*-----------------------------------------");
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
//stream module (video or audio) divid the file into chunks and send them to the server

//if we have big data in data.text ,if we use the fs module then the RAM will be full so we use the stream module

const fs2= require('node:fs');
const path3 = require('node:path');
const sourcepath2 = path3.resolve('./data.txt');
const readablestream = fs2.createReadStream(sourcepath2);
readablestream.on('data', (chunk) => { //this event is called when we receive data 
    console.log('data received');
    console.log(chunk); //each chunk is a buffer with 64kb
    console.log(chunk.toString());
    console.log('data done');
})

readablestream.on('end', () => { //this event is called when we finish reading the file
    console.log('file done');
})

readablestream.on('error', (err) => { //this event is called when we have an error
    console.log(err);
})

//to write a file we need a path
const destinationpath3 = path3.resolve('./data3.txt');
const writablestream = fs2.createWriteStream(destinationpath3);
writablestream.write('hello world');
writablestream.end();



console.log("*-----------------------------------------");
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
//http module
const http = require('node:http');