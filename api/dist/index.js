"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const ioredis_1 = __importDefault(require("ioredis"));
const config_1 = require("./config");
let RedisStore = (0, connect_redis_1.default)(express_session_1.default);
const client = new ioredis_1.default(config_1.REDIS_OPTIONS);
const app = (0, express_1.default)();
app.use((0, express_session_1.default)({ ...config_1.SESSION_OPTIONS, store: new RedisStore({ client }), }));
app.get('/', (req, res) => {
    return res.json({ message: 'OK' });
});
app.listen(3000, () => {
    console.log(`running on port 3000`);
});
//# sourceMappingURL=index.js.map