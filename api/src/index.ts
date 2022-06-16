import express from 'express'
import session from "express-session"
import connectRedis from 'connect-redis'
import Redis from 'ioredis'
import {REDIS_OPTIONS, SESSION_OPTIONS} from './config/'
let RedisStore = connectRedis(session)
const client = new Redis(REDIS_OPTIONS)

const app = express()
app.use(
  session({...SESSION_OPTIONS, store: new RedisStore({ client }),})
)


app.get('/', (req, res) => {
    return res.json({message: 'OK'})
})

app.listen(3000, () => {
    console.log(`running on port 3000`)
})