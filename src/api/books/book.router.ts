import { Books } from './books';
import { Router } from 'express';
import { NextFunction, Request, Response } from 'express';
import bodyParser, { json } from 'body-parser';
interface Dynamic{
    [key: string]: any;
}

const bookRouter =  Router();

bookRouter.route('/:id').get(
    (req: Request, res: Response) => {

        const book =  {} as Dynamic;

        console.log(req.params.id);

        if (req.params.id){
            const id = req.params.id;

            const b = new Books();

            b.getBookById(id).then(books => {
                res.json(books);
            }, err => {
                console.log(`error 102`);

                console.log(err);
            }

            );
        }

    });

bookRouter.route('/')
    .get(
            (req: Request, res: Response) => {

                const book =  {} as Dynamic;

                if (req.query.title){
                    book.title = req.query.title;
                }

                const b = new Books();

                b.getBooks(book).then(books => {
                        res.json(books);
                    }, err => {
                        console.log(`error 102`);

                        console.log(err);
                    }

                    );

            }
        )
    .post(
        (req: Request, res: Response) => {

            const body = req.body;

            const b = new Books();

            b.save(body).then(books => {
                    res.json(books);
                }, err => {
                    console.log(`error 102`);

                    console.log(err);
                }

                );

        }
    );
export {bookRouter};





