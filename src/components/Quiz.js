import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import QuizAnswer from './QuizAnswer';
import QuizQuestion from './QuizQuestion';
import QuizFinished from './QuizFinished';
import { clearLocalNotification, setLocalNotification } from '../../utils/notification';

class Quiz extends Component {
    state = {
        questionsAsked: 1,
        questionsAnsweredCorrect: 0,
        allQuestionsAsked: false,
        showAnswer: false
    }

   resetState = () => {
        this.setState(() => ({
            questionsAsked: 1,
            questionsAnsweredCorrect: 0,
            allQuestionsAsked: false,
            showAnswer: false
        }))
    };

    nextQuestion = (correct) => {
        // first check, if all questions are asked now, because otherwise the quiz will be finished before the last question is answered
        if (this.state.questionsAsked === this.props.questions.length) {
            this.quizFinished();
        }

        if (correct) {
            this.questionAnsweredCorrect();
        };

        const questionsAsked = this.state.questionsAsked + 1;

        // make sure to show the question first for the next card
        this.setState(() => ({
          questionsAsked: questionsAsked,
          showAnswer: false
        }));
    };

    questionAnsweredCorrect = () => {
        this.setState((state) => ({
           questionsAnsweredCorrect: state.questionsAnsweredCorrect + 1
        }))
    };

    quizFinished = () => {
        this.setState(() => ({
            allQuestionsAsked: true
        }))

        clearLocalNotification()
            .then(setLocalNotification)
    };

    showAnswer = () => {
        this.setState(() => ({
            showAnswer: true
        }))
    };

    showQuestion = () => {
        this.setState(() => ({
            showAnswer: false
        }))
    };

    render() {
        const {questionsAsked, questionsAnsweredCorrect, allQuestionsAsked, showAnswer} = this.state;
        const {questions, navigate, deckTitle} = this.props;

        if (allQuestionsAsked) {
            return (
                <View>
                    <QuizFinished 
                        cardsCorrect={questionsAnsweredCorrect}
                        navigate={navigate}
                        questions={questions}
                        deckTitle={deckTitle}
                        resetState={this.resetState}
                    />
                </View>
            )
        }

        if (showAnswer) {
            return (
                <View>
                    <QuizAnswer 
                        question={questions[questionsAsked - 1]}
                        questionsAll={questions.length}
                        questionsAsked={questionsAsked}
                        handleQuestionAnswered={this.nextQuestion}
                        showQuestion={this.showQuestion}
                    />
                </View>
            )
        }

        return (
            <View>
                <QuizQuestion 
                    question={questions[questionsAsked - 1]}
                    questionsAll={questions.length}
                    questionsAsked={questionsAsked}
                    handleQuestionAnswered={this.nextQuestion}
                    showAnswer={this.showAnswer}
                />
            </View>
        )
    }
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

function mapStateToProps({decks}, props) {
    const {questions, deckTitle} = props.navigation.state.params;
    const shuffledQuestions = shuffleArray(questions);

    return {
        questions: shuffledQuestions,
        navigate: props.navigation.navigate,
        deckTitle: deckTitle
    }
};

export default connect(mapStateToProps)(Quiz);