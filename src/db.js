import mongoose from 'mongoose';
// import {MongoClient, ServerApiVersion} from 'mongodb';

// const uri = "mongodb+srv://jonathan:Jse9bUhRAaeu1F6t@cluster0.p9bb3sh.mongodb.net/cluster0?retryWrites=true&w=majority";


// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://jonathan:HhqXgZ5AT51CfTib@cluster0.p9bb3sh.mongodb.net/cluster0?retryWrites=true&w=majority");
        console.log('>>>DB is connected');
    } catch (error) {
        console.log(error);
    }
    // try {
    //     // Connect the client to the server	(optional starting in v4.7)
    //     await client.connect();
    //     // Send a ping to confirm a successful connection
    //     await client.db("admin").command({ ping: 1 });
    //     console.log("Pinged your deployment. You successfully connected to MongoDB!");
    // } finally {
    //     // Ensures that the client will close when you finish/error
    //     await client.close();
    // }

}

