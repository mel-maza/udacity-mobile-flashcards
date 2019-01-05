import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import QuestionsCounter from "./QuestionsCounter";
import QuizButtons from "./QuizButtons";

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

class QuizAnswer extends Component {
    render() {
        const {question, 
            questionsAll, 
            questionsAsked, 
            handleQuestionAnswered,
            showQuestion} = this.props;

        return (
            <View style={styles.container}>
                <QuestionsCounter questionsAll={questionsAll} questionsAsked={questionsAsked}/>
                <Text style={styles.title}>{question.answer}</Text>
                <TouchableOpacity style={styles.buttonQuiz} onPress={showQuestion}>
                    <Text style={styles.buttonQuizText}>Show Question</Text>
                </TouchableOpacity>
                <QuizButtons handleQuestionAnswered={handleQuestionAnswered}/>
            </View>
        )
    }
};

export default QuizAnswer;