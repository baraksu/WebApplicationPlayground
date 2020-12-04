import { Books } from './books';
import { Router } from 'express';
import { NextFunction, Request, Response } from 'express';

const bookRouter =  Router();

bookRouter.route('/')
    .get(
(req: Request, res: Response) => {

    const b = new Books();
    b.getBooks().then(books => {
        res.json(books);
    });



});

export {bookRouter};




