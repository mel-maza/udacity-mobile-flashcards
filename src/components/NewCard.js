import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {addCardToDeck} from '../../utils/api';
import {addQuestion} from '../actions/decks';

const styles = StyleSheet.create({
    container: {
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
    }
})

class NewCard extends Component {
    state={
        question: '',
        answer: ''
    };

    questionChanged = (value) => {
        this.setState(() => ({
            question: value
        }))
    };

    answerChanged = (value) => {
        this.setState(() => ({
            answer: value
        }))
    };

    createCard = () => {
        const {question, answer} = this.state;
        const {deckTitle} = this.props;

        this.props.dispatch(addQuestion(deckTitle, {question: question, answer: answer}));

        addCardToDeck(deckTitle, {question: question, answer: answer});

        this.props.navigation.navigate('Deck');
    }

    render() {
        const {question, answer} = this.state;

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Question'
                    value={question}
                    onChangeText={this.questionChanged}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Answer'
                    value={answer}
                    onChangeText={this.answerChanged}
                />
                <TouchableOpacity
                    style={(question === '' || answer === '') ? styles.buttonDisabled : styles.button}
                    disabled={question === '' || answer === ''}
                    onPress={this.createCard}
                >
                    <Text style={styles.buttonText}>Create Card</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

function mapStateToProps({decks}, props) {
    return {
        deckTitle: props.navigation.state.params.deckTitle
    }
}

export default connect(mapStateToProps)(NewCard);