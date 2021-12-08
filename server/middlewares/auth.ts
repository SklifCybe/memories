import { RequestHandler, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET ?? 'bad-key :(';

type UserId = {
  id: string;
};

export const auth: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new Error('Not found token.');
    }

    const isGoogleAuth = token.length > 500;

    let decodeData;

    if (isGoogleAuth) {
      decodeData = jwt.decode(token);

      req.userId = decodeData?.sub;
    } else {
      decodeData = jwt.verify(token, secretKey);

      req.userId = (<UserId>decodeData).id;
    }

    next();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(401).json({ message: 'Unauthorized.' });
    }
  }
};
