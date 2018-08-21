import mongoose, { Schema, SchemaTypes, Document } from "mongoose";
import { ToDataEntity } from "./modelInterface";

const articleSchema = new Schema({
	title: String,
	content: String,
	createDate: { type: Date, default: Date.now },
	lastUpdateDate: { type: Date, default: Date.now },
	author: { type: SchemaTypes.ObjectId, ref: "user" },
});

interface IArticle extends Document {
	title?: String;
	content?: String;
	createDate?: Date;
	lastUpdateDate?: Date;
	author?: String;
	toEntity?: ToDataEntity;
}

articleSchema.methods.toEntity = function () {
	const author = this.author.toEntity ? this.author.toEntity() : { id: this.author };
	return {
		id: this.id,
		title: this.title,
		content: this.content,
		authorId: author.id,
		authorName: author.userName,
		authorAvatar: author.avatar,
		createDate: this.createDate,
		LastUpdateDate: this.LastUpdateDate
	};
};

const article = mongoose.model<IArticle>("article", articleSchema);
export default article;