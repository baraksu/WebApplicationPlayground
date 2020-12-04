import {  BookModel, IBookDocument } from './book.model';
import { Book } from '../../dto/book';
import mongoose from 'mongoose';
import 'dotenv/config';


export class Books {

    constructor(){

    }

    add(): Promise<IBookDocument> {


        mongoose.connect(`mongodb://localhost/books`, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
        }   , () => {
    console.log('connect to database');
        });

        // const book = new Book({
        //     title: 't1',
        //     message: 'm4'
        // });

        // const bookModel = new BookModel(book);

        // bookModel.save();

        const book01 = BookModel.create({
            title: 't45',
            message: 'm45'
        });



        return book01;




     }

}



