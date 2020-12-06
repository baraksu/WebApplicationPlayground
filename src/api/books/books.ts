import { IBook } from './../../dto/ibook';
import {  BookModel, IBookDocument, } from './book.model';
import {Query, FilterQuery} from 'mongoose';
import 'dotenv/config';
export class Books {

    constructor(){
    }

    save(book: IBookDocument): Promise<IBookDocument> {

        const book01 = BookModel.create(book);

        return book01;
     }
    getBooks(book: FilterQuery<IBookDocument>): Promise<IBookDocument[]> {
        return BookModel.find(book).exec();
    }
    getBookById(id: string): Promise<IBookDocument| null>{
        return BookModel.findById(id).exec();
    }
}



