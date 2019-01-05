# Mobile-Flashcards - Project

This is the 'Mobile flashcards' final assessment project for Udacity's React Fundamentals course. 
The project let's a user create flashcards and take quizzes. 
Users are able to create new decks with their own questions and answers, take a quiz on these questions to see, if they know the answers and see how many cards/questions they answered correctly, after they've finished a quiz.

## Project Setup

* install all project dependencies with `npm install`
* start the development server with `npm start`
* If workspace is used: Click on `Preview` to view the project in the browser 

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
└── src
    ├── actions # contains all action-files
    │   ├── decks.js # actions needed for the decks
    │   └── shared.js # loads the initial data
    ├── components
        ├── Deck.js # component with the UI and handling for one deck
        └── DeckInfo.js # component with the UI for the info of one deck
        ├── DecksList.js # component that shows a list of all created decks
        ├── NewCard.js # component with the UI handling for creating one card/question
        ├── NewDeck.js # component with the UI and handling for creating a new deck
        ├── QuestionsCounter.js # component with the UI for showing the number of questions remaining in the quiz
        ├── Quiz.js # component with the UI for the quiz
        └── QuizAnswer.js # component with the UI showing the answer of a card
        └── QuizButtons.js # component with the UI for the buttons correct/incorrect
        └── QuizFinished.js # component with the UI for the view when finished a quiz
        ├── QuizQuestion.js # component with the UI showing the question of a card
    ├── middleware # contains the redux-middleware files
    │   ├── index.js # applying the thunk middleware to the 
    ├── reducers # contains all reducer-files
    │   ├── decks.js # reducer for setting and getting the decks and questions
    │   ├── index.js # combines all reducers for the redux store
├── utils # contains the data
    ├── api.js # file providing methods using the AsyncStorage
    ├── notification.js # file providing methods for a daily notification
├── App.js # the root of the App containing the navigation

```

## Tested Platforms

The app has been tested on an iOS 6.


