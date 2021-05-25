"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Kafka } = require('kafkajs');
const express_1 = __importDefault(require("express"));
const asyncHandler = require('express-async-handler');
const port = process.env.PORT || 4040;
const topic = process.env.KAFKA_TOPIC;
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['kafka1:9092']
});
const producer = kafka.producer();
const app = express_1.default();
app.use(express_1.default.json());
app.post('/', asyncHandler(sendMessage));
function sendMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield producer.send({
            topic: topic,
            messages: [
                {
                    key: 'check1234',
                    value: req === null || req === void 0 ? void 0 : req.body
                }
            ]
        });
        res.send("cool");
    });
}
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Example app listening at http://localhost:${port}`);
    yield producer.connect();
}));
