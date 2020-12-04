import {Books} from './books/books';
import { NextFunction, Request, Response } from 'express';
class MyController {
  defaultMethod(): any {
    return {
      text: `You've reached the ${this.constructor.name} default method`
    };
  }

  getMy(req: Request, res: Response, next: NextFunction): void {

    
    const books = new Books();
    books.add().then((b) => {
      res.send(`document saved ${b.id}`);
    });




  }
}

export = new MyController();
