import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        height: 100,
        width: 150,
        padding: 10,
        backgroundColor: 'darkturquoise',
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 20
    }
})

class QuizButtons extends Component {
    render() {
        const {handleQuestionAnswered} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => (handleQuestionAnswered(true))}
                >
                    <Text style={styles.buttonText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => (handleQuestionAnswered(false))}
                >
                    <Text style={styles.buttonText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

export default QuizButtons;