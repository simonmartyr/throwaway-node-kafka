"use strict";
import { kafkaConsumer } from './config/kafka';
const kTopic = process.env.KAFKA_TOPIC || "cool-topic";

const run = async () => {
  kafkaConsumer(kTopic).then(({ topic, partition, message }) => {
    console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
  })
};

run().catch(console.error);