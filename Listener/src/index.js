"use strict";

const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092']
});

const consumer = kafka.consumer({ groupId: 'cool-group' })

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'cool-topic', fromBeginning: true })
 
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