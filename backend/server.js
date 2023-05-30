const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;
const start = async() => {
    app.listen(PORT, () => {
        console.log(`server is running at ${PORT}`);
    })
}
start();