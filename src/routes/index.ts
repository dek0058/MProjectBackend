import express, {Request, Response } from 'express';
import { MongoClient } from "mongodb";

const router = express.Router();

const client = new MongoClient("mongodb://127.0.0.1:27017");

interface User {
    name: string;
    password: string;
}
async function run(_name:string, _password:string) {
    try {
        await client.connect();
        const database = client.db("testDB");
        const user = database.collection<User>("user");
        const result = user.insertOne({
            name: _name,
            password: _password
        });

    } finally {

    }
}


router.get('/', (req: Request, res: Response) => {
    run(req.query.username as string, req.query.password as string);
    res.send("name : " + req.query.username + "password : " + req.query.password);
});

module.exports = router;
