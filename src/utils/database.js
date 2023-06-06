import mongoose from "mongoose";

let isConnected = false // track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log("Mongodb is connected")
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'promptyou',
            // userNewUrlParser: true,
            useUnifiedTOpology: true,
        })
        isConnected = true
        console.log("MongoDB connected...")
    } catch (err) {
        console.log(err)
    }

}
