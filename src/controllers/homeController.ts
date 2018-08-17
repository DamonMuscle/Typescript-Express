import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
	// res.send("<p style='color:darkgray;'>hello</p>");
	res.render("index");
};