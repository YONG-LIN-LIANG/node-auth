import { RedisOptions } from 'ioredis'
const {
    REDIS_PORT = 6379,
    REDIS_HOST = 'localhost',
    REDIS_PASSWORD = 'secret'
} = process.env

export const REDIS_OPTIONS: RedisOptions = {
    // 所有從環境變數取出來的值都是字串，所以要把她轉為數字，用+就能轉換
    port: +REDIS_PORT,
    host: REDIS_HOST,
    password: REDIS_PASSWORD
}