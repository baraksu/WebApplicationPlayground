import {model, Schema, Model, Document} from 'mongoose';
import { IBook } from '../../dto/ibook';


const bookSchema: Schema = new Schema ({
    title: {
        type: String
    },
    message: String
});

// tslint:disable-next-line: no-empty-interface
export interface IBookDocument extends IBook, Document{

}

const BookModel = model<IBookDocument>('Book', bookSchema);

export {BookModel};



