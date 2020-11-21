import express from 'express';
//add "type": "module" under name in package.json, otherwise we get an error message "Cannot use import statement outside a module"
//That's an es6 feature
import data from "./data.js" //note that in backend programming, we need to add the extension .js 
//after installing nodemon, add this under scripts:
//"start": "nodemon --watch backend --experimental-modules backend/server.js",


//To redirect to the backend when we make a request, insert this in the package.json of the frontend right after "name":
//"proxy":"http://127.0.0.1:5000", 
//Then npm install axios in the frontend folder



const app = express();

app.get("/api/products", (req, res) =>{
    res.send(data.products);
});

app.get("/", (req, res) =>{
    res.send("Server is ready");
});

const port = process.env.PORT || 5000; // using the environment variable
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})