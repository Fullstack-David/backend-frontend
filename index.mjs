// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// const app = express();
// dotenv.config();

// const PORT = process.env.PORT || 7000;
// const MONGOURL = process.env.MONGO_URL;


// mongoose.connect(MONGOURL).then(() => {
//     console.log('Databas connected successfully.')
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT} http://localhost:8000/getUsers`)
//     })
// }).catch((error) => console.log(error));

// //* alt 1
// // const userSchema = new mongoose.Schema({
// //     name: String,
// //     age: Number,
// // });

// //* alt 2

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     description: {
//         type: String,
//     },
//     rating: {
//         type : Number,
//     },
//     yearOfRelease: {
//         type : Number,
//     },


// }, {timestamps: true})


// const UserModel = mongoose.model("users", userSchema);


// app.get("/getUsers", async (req, res) => {
//     const userData = await UserModel.find();
//     res.json(userData);
// });