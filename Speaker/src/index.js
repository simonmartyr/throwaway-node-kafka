"use strict";

const { Kafka } = require('kafkajs')
const express = require('express')
const asyncHandler = require('express-async-handler');
const port = process.env.PORT || 4040;
const topic = process.env.KAFKA_TOPIC;


const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092']
});

const producer = kafka.producer();

const app = express()
app.use(express.json());
app.post('/', asyncHandler(sendMessage));

async function sendMessage(req, res)
{
  await producer.send({
    topic: topic,
    messages: [
      {
        key: 'check1234',
        value: req.body.message
      },
    ]
  });
  res.send("posted");
}

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`)
  await producer.connect();
})