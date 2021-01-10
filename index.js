const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;


app.get('/', (req,res) => {
    console.log("Request at " + req.hostname);
    res.send('Hello');
});


app.listen(PORT, () => {
    console.log(`Server listening to port: ${PORT}`);
})



