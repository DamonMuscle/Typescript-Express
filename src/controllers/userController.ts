import { Request, Response } from "express";
import user from "../models/user";
import { md5 } from "../util/md5";

/**
 * register user
 * @param req
 * @param res
 */
export let register = (req: Request, res: Response) => {
	new user({
		email: req.body.email,
		password: md5(req.body.password),
		userName: req.body.userName
	}).save().then((r) => {
		res.sendStatus(200);
	}).catch((e) => {
		res.json(e.errmsg);
	});
};

export let login = (req: Request, res: Response) => {
	user.find({
		email: req.body.email,
		password: md5(req.body.password)
	}, (err, users) => {
		if (err) res.send(err);

		if (users && users.length == 1) {
			res.send(true);
			req.session.currentUid = users[0].id;
			req.session.save(() => { });
		}
		else res.send("Email or password is incorrect.");
	});
};

export let update = (req: Request, res: Response) => {
	user.findByIdAndUpdate(req.session.currentUid,
		{ password: md5(req.body.password) }, (err, result) => {
			res.send(result)
		});
};