import { Prediction, formattedPredictions } from '../types'

export const formatResults = (predictions: Prediction[]): formattedPredictions[] => {
    return predictions.map(pred => {
        const { description, id, terms, types } = pred
        return {
            description,
            id,
            terms,
            types
        }
    })
}