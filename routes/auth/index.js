const router = require("express").Router();
const mongoose = require("mongoose");

const User = mongoose.model("User", { email: String, password: String });

router.get("/user", (req, res, next) => {
	const {
		query: { userId },
	} = req;

	res.json({ userId });
});

router.post("/login", (req, res, next) => {
	const {
		body: { email, password },
	} = req;

	res.status(200).json({ msg: "Successful" });
});

router.post("register");

module.exports = router;
