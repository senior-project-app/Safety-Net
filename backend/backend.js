const Supervisor = require("./supervisor.js");
// try to create a user
Supervisor.create("test", "test@test.com", "test")
    .then((result) => {
        console.log("Supervisor created:", result);
    })
    .catch((err) => { 
        console.log("Error creating supervisor:", err); 
    });
