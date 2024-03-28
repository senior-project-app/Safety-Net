const express = require('express');
const Supervisor = require('./backend/Supervisor.js');

const app = express();
const port = process.env.PORT || 5000;


// TODO: implement register and login functions

app.get('/ping', (req, res) => {
    // Handle your API logic here
    res.json({ message: 'Hello from Express!' });
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

