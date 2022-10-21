const router = require("express").Router();

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

module.exports = router;
