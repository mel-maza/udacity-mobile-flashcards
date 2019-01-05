import { RECEIVE_DECKS, DELETE_DECKS, ADD_DECK, ADD_QUESTION } from "../actions/decks";

export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...JSON.parse(action.decks)
            };
        case DELETE_DECKS:
            const newState = {};
            return newState
        case ADD_DECK:
            return {
                ...state,
                [action.deckTitle]: {
                    title: action.deckTitle,
                    questions: []
                }
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.deckTitle]: {
                    ...state[action.deckTitle],
                    questions: state[action.deckTitle].questions.concat([action.question])
                }
            }
        default:
            return state
    }
}