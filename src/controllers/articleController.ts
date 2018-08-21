import { Request, Response } from "express";
import article from "../models/article";
import favourite from "../models/favourite";

export let createArticle = (req: Request, res: Response) => {
	new article(req.body).save((err, result) => {

	});
};

export let updateArticleById = (req: Request, res: Response) => {
	article.findByIdAndUpdate(req.body.articleId,
		{ content: req.body.content, title: req.body.title },
		(err, result) => {
			result.toEntity();
		});
};

export let getArticleById = (req: Request, res: Response) => {
	article.findById(req.body.articleId, (err, result) => {

	});
};

export let addFavourite = (req: Request, res: Response) => {
	new favourite({ article: req.body.articleId, user: req.body.currentUid }).save(() => {

	});
};

export let removeFavourite = (req: Request, res: Response) => {
	favourite.findOneAndRemove({ article: req.body.articleId, user: req.body.currentUid }, () => {

	});
};

export let getLastestArticles = (req: Request, res: Response) => {

};

export let getFavouriteArticles = (req: Request, res: Response) => {

};

export let getArticlesByAuthorId = (req: Request, res: Response) => {

};