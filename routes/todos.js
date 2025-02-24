const express = require("express");

const router = express.Router();

//import controller

const { createTodo } = require("../controllers/createTodo");

//Api Routes

router.post("/createTodo", createTodo);

module.exports = router;