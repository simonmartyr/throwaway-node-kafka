import { Kafka, Producer } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092'],
});

const producer = kafka.producer();

export const sendMessage = (topic : string, message : string) => {
  return producer.send({
    topic: topic,
    messages: [
      {
        key: 'check1234',
        value: message
      }
    ]
  })
  .then(console.log);
}

export const run = async () => {
  await producer.connect();
}