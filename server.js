const express = require('express');
const Supervisor = require('./backend/Supervisor.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())

app.post('/register', (req, res) => {
    Supervisor.register(req.body.name, req.body.email, req.body.password)
        .then(() => {
            res.status(200).json({ "status": "OK"} );
        })
        .catch(() => {
            res.status(500).json({ "status": "Internal Server Error"} );
        });
});

app.get('/ping', (req, res) => {
    // Handle your API logic here
    res.json({ message: 'Hello from Express!' });
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

