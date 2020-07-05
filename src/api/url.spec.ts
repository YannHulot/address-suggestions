import { createURL } from './url';

describe('create url', () => {
    it('creates the url', () => {
        const url = createURL("test", "API_KEY")
        expect(url).toBe('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=test&key=API_KEY&components=country:au')
    })
})