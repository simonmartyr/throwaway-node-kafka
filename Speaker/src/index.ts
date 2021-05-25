"use strict";

import { MessageModel } from "./message";
const { Kafka } = require('kafkajs');
import express, { Request, Response } from "express";
const asyncHandler = require('express-async-handler');
const port = process.env.PORT || 4040;
const topic = process.env.KAFKA_TOPIC;


const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092']
});

const producer = kafka.producer();

const app = express();
app.use(express.json());
app.post('/', asyncHandler(sendMessage));

async function sendMessage(req: Request<{}, {}, MessageModel>, res: Response)
{
  console.log("changed");
  await producer.send({
    topic: topic,
    messages: [
      {
        key: 'check1234',
        value: req?.body.message
      }
    ]
  });
  res.send("cool");
}

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`)
  await producer.connect();
});