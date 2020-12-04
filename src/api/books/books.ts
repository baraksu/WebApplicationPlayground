import {  BookModel, IBookDocument } from './book.model';
import {Query} from 'mongoose';


import 'dotenv/config';


export class Books {

    constructor(){

    }

    add(): Promise<IBookDocument> {



        // const book = new Book({
        //     title: 't1',
        //     message: 'm4'
        // });

        // const bookModel = new BookModel(book);

        // bookModel.save();

        const book01 = BookModel.create({
            title: 't46',
            message: 'm46'
        });



        return book01;




     }
    getBooks(): Promise<IBookDocument[]> {

        return new Promise<IBookDocument[]>((resolve) => {

            const query = BookModel.find();

            query.then(books => {

                resolve(books);
            });

        });
    }

}



