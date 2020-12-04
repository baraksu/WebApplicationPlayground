import { Express, NextFunction, Request, Response, Router } from 'express';
import { bookRouter } from './api/books/book.router';
import HomeController from './api/home.controller';
import myController from './api/my.controller';

export default class ExpressRouter {
  public router: Router;
  private app: Express;

  constructor(app: Express) {
    this.router = Router();
    this.app = app;
  }

  public init(): void {

    this.app.use('/books', bookRouter);
    this.router.get('/my', myController.getMy);
    this.router.get('/', HomeController.getDefault);

    this.app.use('/', this.router);
  }
}
