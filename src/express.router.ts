import { Express, NextFunction, Request, Response, Router } from 'express';
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
    this.router.get('/my', myController.getMy);
    this.router.get('/', HomeController.getDefault);

    this.app.use('/', this.router);
  }
}
