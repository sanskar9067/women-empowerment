import mongoose from 'mongoose';

const womenSchema = new mongoose.Schema({
    name: String,
    address: String,
    skills: String,
    phoneno: Number,
    userid: String,
    idcardno: Number,
    payment: Number,
    employeelocation: String
}, { timestamps: true });

export default mongoose.model("employees", womenSchema);