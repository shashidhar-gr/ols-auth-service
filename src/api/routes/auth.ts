import { Router, Request, Response, NextFunction } from 'express';
import { celebrate, Joi } from 'celebrate';

const route = Router();

export default (app: Router) => {
    app.use('/auth', route);

    route.post('/signin',
    celebrate({
        body: Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required()
        })
    }), 
    async (req: Request, res: Response, next: NextFunction) => {
        try{
            return res.json(req.body).status(200);
        }
        catch(e) {
            console.log("Error in signin endpoint");
            return next(e);
        }
    }
    )
}