import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    innerContainer: {
        marginTop: 20,
        marginBottom: 40,
    },
    button: {
        padding: 10,
        backgroundColor: 'darkturquoise',
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
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

class QuizFinished extends Component {
    restartQuiz = () => {
        const {resetState, navigate, questions, deckTitle} = this.props;

        resetState();

        navigate(
            'Quiz', 
            {
                questions: questions,
                deckTitle: deckTitle
            }
        )
    };

    render() {
        const {cardsCorrect, navigate, deckTitle} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>Finished!!!</Text>
                    <Text style={styles.title}>You have {cardsCorrect} Cards correct!</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.restartQuiz}
                >
                    <Text style={styles.buttonText}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate(
                        'Deck', 
                        {
                            deckTitle: deckTitle,
                        }
                    )}
                >
                    <Text style={styles.buttonText}>Back To Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

export default QuizFinished;