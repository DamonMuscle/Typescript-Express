import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
	res.send("<h1 style='color:darkgray;'>This is the api endpoint of PowerBlog!</h1>");
};