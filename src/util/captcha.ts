export let generateCaptcha = () => {
	return Math.random().toString(36).substr(2, 4).toUpperCase();
};