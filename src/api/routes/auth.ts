import { Router, Request, Response, NextFunction } from 'express';

const route = Router();

export default (app: Router) => {
    app.use('/auth', route);

    route.get('/signin', 
    async (req: Request, res: Response, next: NextFunction) => {
        return res.json({status: "success"}).status(200);
    }
    )
}