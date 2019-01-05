import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import QuizButtons from "./QuizButtons";
import QuestionsCounter from "./QuestionsCounter";

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    buttonQuiz: {
        padding: 10,
        margin: 10,
        width: 200,
        alignSelf: 'center'
    },
    buttonQuizText: {
        color: 'royalblue',
        textAlign: 'center',
        fontWeight: '800'
    },
    title: {
        color: 'teal',
        fontWeight: '800',
        textAlign: 'center',
        fontSize: 20
    }
})

class QuizQuestion extends Component {
    render() {
        const {question, 
            questionsAll, 
            questionsAsked, 
            handleQuestionAnswered,
            showAnswer} = this.props;

        return (
            <View style={styles.container}>
                <QuestionsCounter questionsAll={questionsAll} questionsAsked={questionsAsked}/>
                <Text style={styles.title}>{question.question}</Text>
                <TouchableOpacity style={styles.buttonQuiz} onPress={showAnswer}>
                    <Text style={styles.buttonQuizText}>Show Answer</Text>
                </TouchableOpacity>
                <QuizButtons handleQuestionAnswered={handleQuestionAnswered}/>
            </View>
        )
    }
};

export default QuizQuestion;
