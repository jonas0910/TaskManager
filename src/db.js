import mongoose from 'mongoose';

export const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://jjcondoric:j1S6GcoWIucCtTH7@task-manager-db.hnr10tq.mongodb.net/Task-Manager-DB?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        });
        console.log('>>>DB is connected');
    } catch (error) {
        console.log(error);
    }
}