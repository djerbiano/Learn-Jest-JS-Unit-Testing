const express = require("express");
const multer = require("multer");
const cors = require("cors");
const server = express();
const PORT = 3000;
server.use(cors());
server.use(express.json());
server.use("/images", express.static("images"));
server.use(express.urlencoded({ extended: true }));








server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})