import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const url = "MONGODBURL";
        const conn = await mongoose.connect(url);
        if (conn) {
            console.log(`Connected to DB: ${conn.connection.host}`);
        }
    }
    catch (err) {
        console.log(err);
    }
}
