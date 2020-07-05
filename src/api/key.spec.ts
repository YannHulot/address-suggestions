import { getAPIKey } from './key'

describe('getAPIKey', () => {
    const OLD_ENV = process.env

    beforeEach(() => {
        jest.resetModules() // most important - it clears the cache
        process.env = { ...OLD_ENV } // make a copy
    })

    afterAll(() => {
        process.env = OLD_ENV // restore old env
    })

    it('does not find the key', () => {
        const key = getAPIKey()

        expect(key).toBe(null)
    })

    it('finds the key', () => {
        process.env.API_KEY = "API_KEY"

        const key = getAPIKey()
        expect(key).toBe('API_KEY')
    })
})