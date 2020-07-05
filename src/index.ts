import { getPredictions } from './address-finder/autocomplete'
import { config } from 'dotenv'

// set the env properly before starting the program
config()

let predictions

(async () => {
    try {
        // use gibberish
        predictions = await getPredictions('zzzzz')
        console.log(predictions)

        // sample string
        predictions = await getPredictions('test')
        console.log(predictions)

        // real address
        predictions = await getPredictions('69 oxford terrace')
        console.log(predictions)

        // invalid string
        predictions = await getPredictions('')
        console.log(predictions)
    } catch (e) {
        console.error('there was an issue while interacting with the google maps API')
    }
})()
