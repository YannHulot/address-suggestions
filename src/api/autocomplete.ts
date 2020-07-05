import axios from 'axios';
import { Data, Results } from '../types';
import { getAPIKey } from './key';
import { createURL } from './url';

export const getPredictions = async (search: string): Promise<Results> => {
    const key = getAPIKey();
    if (!key) {
        return {
            predictions: null,
            status: "error",
            error_message: "API KEY not set in env"
        }
    }

    if (!search || search.length === 0) {
        return {
            predictions: null,
            status: "error",
            error_message: "search string needs to have 1 character minimum"
        }
    }

    return await findPlaces(search, key)
}


const findPlaces = async (param: string, key: string): Promise<Results> => {
    const { status, predictions } = await callAPI(param, key);
    if (!predictions) {
        return {
            predictions: null,
            status: 'error',
            error_message: 'test'
        }
    }

    return {
        predictions,
        status,
    }
}

const callAPI = async (place: string, key: string): Promise<Data> => {
    const url = createURL(place, key)

    try {
        const { data } = await axios.get(url)
        return data as Data
    } catch (err) {
        return { predictions: null, status: 'ERROR' }
    }
}


