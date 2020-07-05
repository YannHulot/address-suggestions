import { getPredictions } from './api/autocomplete'
import { config } from 'dotenv'

// set the env
config()

let predictions

(async () => {
    try {
        predictions = await getPredictions('test')
        console.log(predictions)

        predictions = await getPredictions('69 oxford terrace')
        console.log(predictions)

        predictions = await getPredictions('')
        console.log(predictions)
    } catch (e) {
        console.error('there was an issue while interacting with the API')
        // Deal with the fact the chain failed
    }
})()
