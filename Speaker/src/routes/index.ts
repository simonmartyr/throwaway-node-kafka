import express from "express";
const messages = require('./message.route'); 

const router = express.Router();

router.use('/', messages);

module.exports = router;