# Throwaway-Node-Kafka

Repo to mess around with KafkaJs.

## Quick Start

Run the `docker-compose`

```sh
docker-compose up
```

### Post a message to the speaker

```sh
curl localhost:4040 -d '{"message":"hello"}' -H "Content-Type: application/json"
```

via the console, you should see your message from the listener.
