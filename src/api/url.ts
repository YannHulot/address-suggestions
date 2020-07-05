const baseAPI = "https://maps.googleapis.com/maps/api/place/autocomplete/json?"

export const createURL = (param: string, API_KEY: string): string => {
    return baseAPI + `input=${param}&key=${API_KEY}&components=country:au`
}