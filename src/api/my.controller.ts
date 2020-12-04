
import { NextFunction, Request, Response } from 'express';
import { Books } from './books/books';
class MyController {
  defaultMethod(): any {
    return {
      text: `You've reached the ${this.constructor.name} default method`
    };
  }

  getMy(req: Request, res: Response, next: NextFunction): void {

    res.send('my');
    const books = new Books();
    books.add().then((b) => {
      res.send(`document saved ${b.id}`);
    });




  }
}

export = new MyController();
