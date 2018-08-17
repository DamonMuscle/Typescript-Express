import { Request, Response } from "express";
import user from "../models/user";

/**
 * register user
 * @param req 
 * @param res 
 */
export let register = (req: Request, res: Response) => {
	new user({
		email: req.body.email,
		password: req.body.password,
		userName: req.body.userName
	}).save().then((r) => {
		res.sendStatus(200);
	}).catch((e) => {
		res.send(e.errmsg);
	});
};