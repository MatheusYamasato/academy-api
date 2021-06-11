import * as express from 'express'
import * as cors from 'cors'
import { connectServerDB } from './config/db'
import { routes } from './routes/user'

export const app = express()

app.use(cors())
app.use(express.json())

connectServerDB()

app.use('/users', routes)
app.use('/', (req, res) => res.send("Academy API"))