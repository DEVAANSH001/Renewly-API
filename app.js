import express from 'express'
import { PORT } from './config/env.js'
import userrouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import authRouter from './routes/auth.routes.js'
import connectDB from './database/mongodb.js'
import errorMiddleware from './middleware/error.middleware.js'
import cookieParser from 'cookie-parser'
import arcjetMiddleware from './middleware/arcjet.middleware.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(arcjetMiddleware)

// routes
app.get('/', (req, res) => {
  res.send('hello api')
})
app.use('/api/users', userrouter)
app.use('/api/subscriptions', subscriptionRouter)
app.use('/api/auth', authRouter)
app.use(errorMiddleware)
//
const startServer = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(` Server started successfully on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error(" Failed to start server:", error.message)
    process.exit(1)
  }
}

startServer()

export default app
