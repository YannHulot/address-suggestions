
import { getPredictions } from './autocomplete'
import { Data, Results } from '../types'
import responseJson from '../samples/multiple-results.json'
import formattedResponse from '../samples/expected-results.json'

import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

afterEach(jest.resetAllMocks)

describe('getPredictions', () => {
    describe('returns an error', () => {
        it('has no API key', async () => {
            const expectedResponse: Results = {
                "error_message": "API KEY not set in env",
                "predictions": [],
                "status": "error"
            }
            const results = await getPredictions('test')
            expect(results).toMatchObject(expectedResponse)
        })

        it('has no search string', async () => {
            process.env.API_KEY = "API_KEY"

            const expectedResponse: Results = {
                "error_message": "search string needs to have 1 character minimum",
                "predictions": [],
                "status": "error"
            }
            const results = await getPredictions('')
            expect(results).toMatchObject(expectedResponse)
        })
    })

    describe('calls the API', () => {
        it('returns an error', async () => {
            const data = {
                error: "this is a fake error"
            }
            mockedAxios.get.mockImplementation(() => Promise.reject(data))

            const expectedResponse: Results = {
                "predictions": [],
                "status": "error"
            }

            const results = await getPredictions('test')
            expect(results).toMatchObject(expectedResponse)
        })

        it('returns zero results', async () => {
            const innerData: Data = {
                "predictions": [],
                "status": "ZERO_RESULTS"
            }

            const response = {
                data: innerData
            }

            const expectedResponse: Results = {
                "predictions": [],
                "status": "ZERO_RESULTS"
            }

            mockedAxios.get.mockImplementation(() => Promise.resolve(response))
            const results = await getPredictions('test')
            expect(results).toMatchObject(expectedResponse)
        })

        it('returns multiple results', async () => {
            const innerData: Data = responseJson;
            const formattedResults = formattedResponse;

            const response = {
                data: innerData
            }

            mockedAxios.get.mockImplementationOnce(() => Promise.resolve(response))
            const results = await getPredictions('test')
            expect(results).toMatchObject(formattedResults)
        })
    })
})