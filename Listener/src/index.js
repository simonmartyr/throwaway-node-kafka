"use strict";

const { Kafka } = require('kafkajs')
const kTopic = process.env.KAFKA_TOPIC;

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092']
});

const consumer = kafka.consumer({ groupId: 'cool-group' })

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: kTopic, fromBeginning: true })
 
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
};

run().catch(console.error);