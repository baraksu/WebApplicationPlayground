import { Router } from 'express';
import { NextFunction, Request, Response } from 'express';

const bookRouter =  Router();

bookRouter.route('/')
    .get(
(req: Request, res: Response) => {
    const r = {title: 'xxxx'};
    res.json(r);
});

export {bookRouter};




