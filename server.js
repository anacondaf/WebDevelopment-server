const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8081;

const api = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", api);

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});
