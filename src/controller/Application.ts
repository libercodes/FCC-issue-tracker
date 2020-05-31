import mongoose from 'mongoose'
import { URI, DB_CONFIG } from '../utils/config'

export const ApplicationRun = async() => {
    console.log(`server running on port ${process.env.PORT}`)
    await mongoose.connect(URI, DB_CONFIG)
}