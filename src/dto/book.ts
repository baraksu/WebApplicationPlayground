import { IBook } from './ibook';


export class Book implements IBook {
    title: string;
    message: string;

    constructor(book: IBook) {
        this.title = book.title;
        this.message = book.message;
    }

}
