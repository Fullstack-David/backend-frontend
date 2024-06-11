import express from 'express';
import cors from 'cors';
import connectDB from './utils/db.mjs'; 
import  Users  from './models/usersModels.js';
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

connectDB();


app.get('/api/youtube', (req, res) => {
    res.json({ like: "Like the video", subscribe: "Sucbscribe the video" });
})

// post
app.post('/api/users',async (req, res) => {
    // console.log(req.body)
    try {
        const users = await Users.create(req.body);
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        res.status(500).json({
            message: error.message 
        })
    }
})

// reading
app.get('/api/users',async (req, res) => {
    try {
        const users = await Users.find()
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        res.status(500).json({
            message: error.message 
        })
    }
})

app.get('/api/users/:id',async (req, res) => {
    try {
        const users = await Users.findById(req.params.id);

        if (!users) {
            return res.status(404).json({message: `Users with the id: ${req.params.id} not found.`})
        }

        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        res.status(500).json({
            message: error.message 
        })
    }
})


app.patch('/api/users/:id', async (req, res) => {
    try {
        const users = await Users.findByIdAndUpdate(req.params.id, req.body);
        if (!users) {
            return res.status(404).json({message: `Users with the id: ${req.params.id} not found.`})
        }
        const updatedUsers = await Users.findById(req.params.id)
        
        res.status(200).json({
            success: true,
            updatedUsers
        })
    } catch (error) {
        res.status(500).json({
            message: error.message 
        })
    }
})


app.delete('/api/users/:id', async (req, res) => {
    try {
        const users = await Users.findByIdAndDelete(req.params.id);

        if (!users) {
            return res.status(404).json({message: `Users with the id: ${req.params.id} not found.`})
        }
        
        res.status(200).json({
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: error.message 
        })
    }
})



app.listen(PORT, () => console.log(`Server is running on ${PORT} http://localhost:8000/api/youtube`));

