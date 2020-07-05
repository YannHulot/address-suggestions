import { createURL } from './url'

describe('createURL', () => {
    it('creates the url based on the API_KEY and the search parameter', () => {
        const url = createURL("test", "API_KEY")
        expect(url).toBe(
            'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=test&key=API_KEY&components=country:au'
        )
    })
})