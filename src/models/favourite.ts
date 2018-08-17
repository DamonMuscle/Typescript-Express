import mongoose, { Schema, SchemaTypes } from "mongoose";

const favouriteSchema = new Schema({
	favoriteDate: { type: Date, default: Date.now },
	user: { type: SchemaTypes.ObjectId, ref: "user" },
	article: { type: SchemaTypes.ObjectId, ref: "article" },
});

favouriteSchema.methods.toEntity = function () {
	return {
		favoriteDate: this.favoriteDate,
		...(this.article.toEntity ? this.article.toEntity() : {})
	};
};

const favorite = mongoose.model("favorite", favouriteSchema);

export default favorite;