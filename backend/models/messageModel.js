import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    id1: String,
    id2: String,
    message: String
}, { timestamps: true })
