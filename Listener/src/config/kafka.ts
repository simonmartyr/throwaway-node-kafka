import { Kafka, EachMessagePayload } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092']
});

export const kafkaConsumer = (eventName: string): Promise<any> => {
  return new Promise(async(resolve, reject) => {
    const consumer = await kafka.consumer({ groupId: 'cool-group' });

    await consumer.connect();
    await consumer.subscribe({ topic: eventName, fromBeginning: true});
    await consumer.run({
      eachMessage: async (messagePayLoad: EachMessagePayload) => resolve(messagePayLoad)
    });
  });
}