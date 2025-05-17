const express = require("express"); 

const app = express();

app.get("/user", (req,res)=> {
    res.send({firstName: "Karthik", lastName: "Nair"});
});

app.post("/user", (req,res)=> {
    console.log("Save Data to the Database");
    res.send("Data successfully saved to the database");
});

app.delete("/user", (req,res)=> {
    res.send("Deleted successfully");
});
app.use("/test", (req,res) => {
    res.send("hello from the server!");
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});
 