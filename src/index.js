import app from './app.js'
import { connectDB } from './db.js';
import dotenv from 'dotenv';
dotenv.config();

connectDB();
app.listen(process.env.PORT || 3000);
console.log('>>>Servidor corriendo en: ',process.env.PORT || 3000)