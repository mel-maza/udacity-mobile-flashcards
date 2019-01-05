import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
    buttonText: {
        color: 'teal',
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 20
    }
})

class DeckInfo extends Component{
    render() {
        const {deck} = this.props;

        let cardsNumber = 0;
        if (deck.questions) {
            cardsNumber = deck.questions.length;
        }

        return (
            <View>
                <Text style={styles.buttonText}>{deck.title}</Text>
                <Text style={styles.buttonText}>{cardsNumber} Cards</Text>
            </View>
        )
    }
};

function mapStateToProps({decks}, props) {
    const deck = decks[props.deckTitle];
    return {
        deck: deck
    }
}

export default connect(mapStateToProps)(DeckInfo);