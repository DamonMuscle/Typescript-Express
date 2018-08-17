import mongoose, { Schema, SchemaTypes } from "mongoose";

const articleSchema = new Schema({
	title: String,
	content: String,
	createDate: { type: Date, default: Date.now },
	lastUpdateDate: { type: Date, default: Date.now },
	author: { type: SchemaTypes.ObjectId, ref: "user" },
});

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

const article = mongoose.model("article", articleSchema);
export default article;