
import { NextFunction, Request, Response } from 'express';
import { Books } from './books/books';
export default class MyController {


  static getMy(req: Request, res: Response, next: NextFunction): void {

    // const books = new Books();
    // books.add().then((b) => {
    //   res.send(`document saved ${b.id}`);
    // });




  }
  defaultMethod(): any {
    return {
      text: `You've reached the ${this.constructor.name} default method`
    };
  }
}
