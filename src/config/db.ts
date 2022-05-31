import mongoose from 'mongoose';
import 'dotenv/config'

const db = {
    connect: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port : process.env.DB_PORT
};

const auth = db.user && db.password ? `${db.user}:${db.password}@` : '';

async function connect() {
    try {
        await mongoose.connect(
            // "mongodb://docker:mongopw@localhost:49153/books"
            `${db.connect}://${auth}${db.host}:${db.port}/${db.database}`
        );

        console.log('Connected to mongodb');
    } catch (err) {
        console.log(err);
    }
}

export { connect };