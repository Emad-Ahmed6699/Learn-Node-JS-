//Express js is unopinionated --> every developer has his own folder structure to write the code
//Nest js is a framework of express js --> is opinionated --> has a folder structure that we have to follow ()

//Express js is a framework for web applications (small web services )
//Nest js is a framework for web services (services like facebook, twitter, google, E commerce ,etc...)

const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res, next) => { //get request 
    res.send("home page"); //send === write and end (don't need to use res.writehead() )
});

app.get("/about", (req, res, next) => { //get request 
    res.send("<h1>about page</h1>"); //the method itself that determines the content of the response ((don't need to use res.writehead() ))
});

app.post("/tasks", (req, res, next) => { //post request 
    return res.send("tasks page"); //in this case the request won't be executed in browser so use postman to test it
    /*res.send("<h1>tasks page</h1>");*/  //this code won't be executed so we use return for avoiding sending two responses
});

app.get("/test", (req, res, next) => { 
    res.send({message: "test page"}); //return json using send method
    res.json({message: "test page"});//return json using json method
    res.json(null);//return null
    res.json({});//return empty object
    res.status(202).send("test page");//return text with status code 202
    res.json("emad ahmed");//return json 
    //json is more scure than send and faster because it returns json without checking the content type as happens with send
});

app.get("/tessst", (req, res, next) => { 
    res.send(JSON.stringify({message: "tessst page <script>alert('xss attack')</script>"})); //this will not show the script in the browser 
    //but will show it in postman , the script will be executed in the browser , it is called xss attack (cross site scripting attack)
    //always use json instead of send
    //res.download("tessst page <script>alert('xss attack')</script>"); //this will download the file
});

app.all("/*dummy", (req, res, next) => { //all request (as else ), dummy is a wildcard and it will match any request that is not matched by the other routes
    res.status(404).json({ message: "page not found" }); //the content of the response is json ****
});//it must be at end of the all cases either get or post or anything else

// "/*dummy" work on all request that is not matched by the other routes (not the base url)   =->> the base url is "/"
// "{/*dummy}" work on all request that is not matched by the other routes and the base url

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});