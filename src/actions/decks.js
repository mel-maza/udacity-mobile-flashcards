export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const DELETE_DECKS = 'DELETE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
};

export function deleteDecksfromStore() {
    return {
        type: DELETE_DECKS,
    }
};

export function addDeck(deckTitle) {
    return {
        type: ADD_DECK,
        deckTitle
    }
};

export function addQuestion(deckTitle, question) {
    return {
        type: ADD_QUESTION,
        deckTitle,
        question
    }
}