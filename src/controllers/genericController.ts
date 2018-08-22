import { Request, Response } from "express";
import { Random } from "mockjs";

export let generateCaptcha = (req: Request, res: Response) => {
	res.json({ captcha: Random.image("200x40", "#FFFFFF", "#000000", "png", Math.random().toString(36).substr(2, 4).toUpperCase()) });
};