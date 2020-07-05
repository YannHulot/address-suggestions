
import { getPredictions } from './autocomplete';
import { Data, Results } from '../types';

import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(jest.resetAllMocks)

describe('autocomplete', () => {
    describe('checks for the key', () => {
        it('has no API key', async () => {
            const expectedResponse: Results = {
                "error_message": "API KEY not set in env",
                "predictions": null,
                "status": "error"
            }
            const results = await getPredictions('test');
            expect(results).toMatchObject(expectedResponse)
        })

        it('has no search string', async () => {
            process.env.API_KEY = "API_KEY"

            const expectedResponse: Results = {
                "error_message": "search string needs to have 1 character minimum",
                "predictions": null,
                "status": "error"
            }
            const results = await getPredictions('');
            expect(results).toMatchObject(expectedResponse)
        })
    })

    describe('calls the API', () => {
        it('returns an error', async () => {
            const data = {
                error: "this is a fake error"
            }
            mockedAxios.get.mockImplementation(() => Promise.reject(data));

            const expectedResponse: Results = {
                "predictions": null,
                "status": "error"
            }

            const results = await getPredictions('test')
            expect(results).toMatchObject(expectedResponse)
        })

        // it('returns an empty array', async () => {
        //     const data: Data = {
        //         "predictions": [],
        //         "status": "ZERO_RESULTS"
        //     }

        //     const expectedResponse: Results = {
        //         "predictions": null,
        //         "status": "ERROR"
        //     }


        //     mockedAxios.get.mockImplementation(() => Promise.resolve(data));
        //     const results = await getPredictions('test')
        //     expect(results).toMatchObject(expectedResponse)
        // })

        // it('returns results', async () => {
        //     const data: Data = {
        //         "predictions": [{
        //             "description": "69 Oxford Terrace, Taringa QLD, Australia",
        //             "id": "868cbd0dd17dd3e0ea98a28a939a908744a11f63",
        //             "matched_substrings": [
        //                 {
        //                     "length": 2,
        //                     "offset": 0
        //                 },
        //                 {
        //                     "length": 14,
        //                     "offset": 3
        //                 }
        //             ],
        //             "place_id": "ChIJNUvrCvRQkWsRVK7ON8wy15E",
        //             "reference": "ChIJNUvrCvRQkWsRVK7ON8wy15E",
        //             "structured_formatting": {
        //                 "main_text": "69 Oxford Terrace",
        //                 "main_text_matched_substrings": [
        //                     {
        //                         "length": 2,
        //                         "offset": 0
        //                     },
        //                     {
        //                         "length": 14,
        //                         "offset": 3
        //                     }
        //                 ],
        //                 "secondary_text": "Taringa QLD, Australia"
        //             },
        //             "terms": [
        //                 {
        //                     "offset": 0,
        //                     "value": "69"
        //                 },
        //                 {
        //                     "offset": 3,
        //                     "value": "Oxford Terrace"
        //                 },
        //                 {
        //                     "offset": 19,
        //                     "value": "Taringa"
        //                 },
        //                 {
        //                     "offset": 27,
        //                     "value": "QLD"
        //                 },
        //                 {
        //                     "offset": 32,
        //                     "value": "Australia"
        //                 }
        //             ],
        //             "types": [
        //                 "street_address",
        //                 "geocode"
        //             ]
        //         },],
        //         "status": ""
        //     }

        //     mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));
        //     const results = await getPredictions('test')
        //     expect(results).toMatchObject({})
        // })
    })
})