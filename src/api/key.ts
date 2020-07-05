export const getAPIKey = (): string | null => {
    const { API_KEY } = process.env

    if (!API_KEY) {
        return null
    }
    return API_KEY
}
