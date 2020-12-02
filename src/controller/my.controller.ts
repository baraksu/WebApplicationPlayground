import { NextFunction, Request, Response } from 'express';
class MyController {
  defaultMethod(): any {
    return {
      text: `You've reached the ${this.constructor.name} default method`
    };
  }

  getMy(req: Request, res: Response, next: NextFunction): void {
    res.json({
      text: `You've reached the ${req.path} default method`
    });
  }
}

export = new MyController();
