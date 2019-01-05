import {AsyncStorage} from 'react-native';

const commonKey = 'MY_DECKS'

const decks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export function deleteDecks() {
    return AsyncStorage.removeItem(commonKey)
}

export async function getDecks() {
    return await AsyncStorage.getItem(commonKey);
};

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(commonKey, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    })) 
}

export function addCardToDeck(deckTitle, card) {
    return AsyncStorage.getItem(commonKey)
        .then((results) => {
            const data = JSON.parse(results)
            const deck = {
                ...data[deckTitle],
                questions: data[deckTitle].questions.concat([card])
            }
            AsyncStorage.mergeItem(commonKey, JSON.stringify({
                [deckTitle]: deck
            }))
        })
}