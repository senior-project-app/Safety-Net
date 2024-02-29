const Supervisor = require("./supervisor.js");

/* user creation example 

Supervisor.register("test", "test@test.com", "test")
    .then((result) => {
        console.log("Supervisor created:", result);
    })
    .catch((err) => { 
        console.log("Error creating supervisor:", err); 
    });
*/

// supervisor example
// supervisor_1 = Supervisor.register("dev", "dev@safetynet.com", "dev");

// supervisor login example

console.log(Supervisor.login("dev@safetynet.com", "de1v").then(result => console.log(result)));