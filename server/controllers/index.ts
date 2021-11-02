import { Request, Response } from 'express';

export class MainController {
  static getHello(req: Request, res: Response) {
    res.send('hello');
  }
}
