import express, { Request, Response } from "express";
const asyncHandler = require('express-async-handler');
import { MessageModel } from "../models/message";
import { randomPhrase } from '../utils/randomPhrase';
const producer = require('../config/kafka');
const router = express.Router();
const topic = process.env.KAFKA_TOPIC;


router.post('/', asyncHandler(sendMessage));

async function sendMessage(req: Request<{}, {}, MessageModel>, res: Response)
{
  await producer.send({
    topic: topic,
    messages: [
      {
        key: 'check1234',
        value: req?.body.message
      }
    ]
  });
  res.send(randomPhrase("ok", "great", "thanks", "cool"));
}

module.exports = router;