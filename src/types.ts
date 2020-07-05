/* eslint-disable camelcase */
export interface MatchedSubstring {
    length: number;
    offset: number;
}

export interface MainTextMatchedSubstring {
    length: number;
    offset: number;
}

export interface SecondaryTextMatchedSubstring {
    length: number;
    offset: number;
}

export interface StructuredFormatting {
    main_text: string;
    main_text_matched_substrings: MainTextMatchedSubstring[];
    secondary_text: string;
    secondary_text_matched_substrings: SecondaryTextMatchedSubstring[];
}

export interface Term {
    offset: number;
    value: string;
}

export interface Prediction {
    description: string;
    id: string;
    matched_substrings: MatchedSubstring[];
    place_id: string;
    reference: string;
    structured_formatting: StructuredFormatting;
    terms: Term[];
    types: string[];
}

export interface Data {
    predictions: Prediction[];
    status: string;
}

export interface Results {
    predictions: Prediction[] | null;
    status: string;
    error_message?: string;
}
