import mongoose from 'mongoose';

export const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://jjcondoric:j1S6GcoWIucCtTH7@task-manager-db.hnr10tq.mongodb.net/?retryWrites=true&w=majority');
        console.log('>>>DB is connected');
    } catch (error) {
        console.log(error);
    }
}