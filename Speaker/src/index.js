"use strict";

const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092']
});

const producer = kafka.producer();

const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'cool-topic',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  });
};

run().catch(console.error);