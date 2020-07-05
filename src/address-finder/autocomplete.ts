import axios from 'axios'
import { Data, Results, formattedPredictions } from '../types'
import { getAPIKey } from '../utils/key'
import { createURL } from '../utils/url'
import { formatResults } from '../utils/format-results';

export const getPredictions = async (search: string): Promise<Results> => {
    const key = getAPIKey()
    if (!key) {
        return {
            predictions: [],
            status: "error",
            error_message: "API KEY not set in env"
        }
    }

    if (!search || search.length === 0) {
        return {
            predictions: [],
            status: "error",
            error_message: "search string needs to have 1 character minimum"
        }
    }

    return await findPlaces(search, key)
}


const findPlaces = async (param: string, key: string): Promise<Results> => {
    const { status, predictions } = await callAPI(param, key)
    if (status === 'error') {
        return {
            predictions: [],
            status: 'error',
            error_message: 'there was an error querying the api'
        }
    }

    return {
        predictions: formatResults(predictions),
        status,
    }
}

const callAPI = async (place: string, key: string): Promise<Data> => {
    const url = createURL(place, key)

    try {
        const { data } = await axios.get(url)
        return data as Data
    } catch (err) {
        return { predictions: [], status: 'error' }
    }
}


