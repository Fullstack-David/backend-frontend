import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    age: {
        type: Number
    },
    born: {
        type: Number
    }
}, { timestamps: true });


const Users = mongoose.model("users", userSchema);

export default Users;

