import express from 'express';
import cors from 'cors';
import fileCreation from './controllers/fileCreation.js';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/data', (req, res) => {
    res.send('Hello World!');
});
 app.post('/data', (req, res) => {
    const userData = req.body;
    fileCreation(userData.name, userData)
    // Store the data in a database or perform some other action
    res.send("Data received successfully!");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

