const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());

app.listen(8080);

const rootRoute = require("./routers/rootRoute")
app.use("/api", rootRoute)