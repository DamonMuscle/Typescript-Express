import crypto from "crypto";

export let md5 = (text: string) => {
	return crypto.createHash("md5").update(text).digest("hex");
};