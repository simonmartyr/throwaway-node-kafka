import express, { Request, Response } from "express";
const asyncHandler = require('express-async-handler');
import { MessageModel } from "../models/message";
import { randomPhrase } from '../utils/randomPhrase';
import { sendMessage as sm } from '../config/kafka';
const router = express.Router();
const topic = process.env.KAFKA_TOPIC || "cool-topic";


router.post('/', asyncHandler(sendMessage));

async function sendMessage(req: Request<{}, {}, MessageModel>, res: Response)
{
  sm(topic, req?.body.message);
  res.send(randomPhrase("ok", "great", "thanks", "cool"));
}

module.exports = router;