import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import DeckInfo from './DeckInfo';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    button: {
        padding: 10,
        backgroundColor: 'darkturquoise',
        margin: 10,
        borderRadius: 5
    },
    buttonDisabled: {
        padding: 10,
        backgroundColor: 'lightsteelblue',
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '800'
    },
    textInput: {
        margin: 10,
        padding: 5,
        fontWeight: '800',
        borderRadius: 5,
        borderColor: 'darkturquoise',
        borderWidth: 1,
        height: 40
    },
    title: {
        color: 'teal',
        fontWeight: '800',
        textAlign: 'center',
        fontSize: 20
    }
})

class Deck extends Component {
    render() {
        const {deckTitle, questions, navigate} = this.props;

        return (
            <View style={styles.container}>
                <DeckInfo deckTitle={deckTitle}/>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate(
                        'NewCard',
                        {
                            deckTitle: deckTitle
                        }
                    )}
                >
                    <Text style={styles.buttonText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={questions.length === 0}
                    style={questions.length === 0 ? styles.buttonDisabled : styles.button}
                    onPress={() => navigate(
                        'Quiz', 
                        {
                            questions: questions,
                            deckTitle: deckTitle
                        }
                    )}
                >
                    <Text style={styles.buttonText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

function mapStateToProps({decks}, props) {
    const {deckTitle} = props.navigation.state.params;
    const questions = decks[deckTitle].questions

    return {
        deckTitle: deckTitle,
        questions: questions,
        navigate: props.navigation.navigate
    }
}

export default connect(mapStateToProps)(Deck);