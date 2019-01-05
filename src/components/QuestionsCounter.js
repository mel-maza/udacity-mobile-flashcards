import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    text: {
        marginLeft: 10,
        color: 'royalblue'
    }
})

class QuestionsCounter extends Component {
    render() {
        const {questionsAll, questionsAsked} = this.props;

        return (
            <View>
                <Text style={styles.text}>{questionsAsked} / {questionsAll}</Text>
            </View>
        )
    }
};

export default QuestionsCounter;