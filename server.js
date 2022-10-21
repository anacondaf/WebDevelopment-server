const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8081;

const api = require("./routes");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", () => {
	console.log("DB Connected");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", api);

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});
