const Supervisor = require('./Supervisor');

Supervisor.register("Cole Hoffman", "example@example.com", "password_example")
    .then((res) => {
        console.log(res);
    });