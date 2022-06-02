import express, {Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();
const api = require('./routes/index');

app.use(cors());
app.use('/api', api);

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('Hello World!');
// });

const port = process.env.PORT || 3333;

app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});


