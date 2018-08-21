// import bcrypt from "bcrypt-nodejs";
// import crypto from "crypto";
// import mongoose from "mongoose";

// export type UserModel = mongoose.Document & {
// 	email: string,
// 	password: string,
// 	passwordResetToken: string,
// 	passwordResetExpires: Date,

// 	facebook: string,
// 	tokens: AuthToken[],

// 	profile: {
// 		name: string,
// 		gender: string,
// 		location: string,
// 		website: string,
// 		picture: string
// 	},

// 	comparePassword: comparePasswordFunction,
// 	gravatar: (size: number) => string
// };

// type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void;

// export type AuthToken = {
// 	accessToken: string,
// 	kind: string
// };

// const userSchema = new mongoose.Schema({
// 	email: { type: String, unique: true },
// 	password: String,
// 	passwordResetToken: String,
// 	passwordResetExpires: Date,

// 	facebook: String,
// 	twitter: String,
// 	google: String,
// 	tokens: Array,

// 	profile: {
// 		name: String,
// 		gender: String,
// 		location: String,
// 		website: String,
// 		picture: String
// 	}
// }, { timestamps: true });

// /**
//  * Password hash middleware.
//  */
// userSchema.pre("save", function save(next) {
// 	const user = this;
// 	if (!user.isModified("password")) { return next(); }
// 	bcrypt.genSalt(10, (err, salt) => {
// 		if (err) { return next(err); }
// 		bcrypt.hash(user.password, salt, undefined, (err: mongoose.Error, hash) => {
// 			if (err) { return next(err); }
// 			user.password = hash;
// 			next();
// 		});
// 	});
// });

// const comparePassword: comparePasswordFunction = function (candidatePassword, cb) {
// 	bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
// 		cb(err, isMatch);
// 	});
// };

// userSchema.methods.comparePassword = comparePassword;

// /**
//  * Helper method for getting user"s gravatar.
//  */
// userSchema.methods.gravatar = function (size: number) {
// 	if (!size) {
// 		size = 200;
// 	}
// 	if (!this.email) {
// 		return `https://gravatar.com/avatar/?s=${size}&d=retro`;
// 	}
// 	const md5 = crypto.createHash("md5").update(this.email).digest("hex");
// 	return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
// };

// // export const User: UserType = mongoose.model<UserType>("User", userSchema);
// const user = mongoose.model("user", userSchema);
// export default user;


import mongoose, { Schema, Document } from "mongoose";
import { ToDataEntity } from "./modelInterface";

interface IUser extends Document {
	email: String;
	password: String;
	bio: String;
	userName: String;
	avatar: String;
	signupDate: Date;
	toEntity: ToDataEntity;
}

const userSchema = new mongoose.Schema({
	email: { type: String, unique: true },
	password: String,
	bio: String,
	userName: String,
	avatar: String,
	signupDate: { type: Date, default: Date.now },
});

userSchema.methods.toEntity = function () {
	return {
		id: this.id,
		email: this.email,
		userName: this.userName,
		signupDate: this.signupDate,
		avatar: this.avatar,
		bio: this.bio
	};
};

const user = mongoose.model<IUser>("user", userSchema);

export default user;