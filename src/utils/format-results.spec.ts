import { formatResults } from './format-results';
import { Data, formattedPredictions } from '../types'
import responseJson from '../samples/multiple-results.json'
import formattedResponse from '../samples/expected-results.json'

const resultsToFormat: Data = responseJson
const resultsExpected = formattedResponse

describe('formatResults', () => {
    it('formats the results', () => {
        const formattedData: formattedPredictions[] = formatResults(resultsToFormat.predictions)
        expect(formattedData).toMatchObject(resultsExpected.predictions)
    })
})
