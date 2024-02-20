import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isOrganization: String,
    organisation: String,
    location: String
}, { timestamps: true });

export default mongoose.model("users", userSchema);
