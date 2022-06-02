import express, {Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send({greeting:'Hello React x Node.js'});
});

module.exports = router;
