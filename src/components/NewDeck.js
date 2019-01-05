import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {saveDeckTitle} from '../../utils/api';
import {addDeck} from '../actions/decks';
import {withNavigationFocus} from 'react-navigation';

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

class NewDeck extends Component {
    state = {
        title: '',
    };

    titleChanged = (value) => {
        this.setState(() => ({
            title: value
        }))
    };

    createDeck = () => {
        const {title} = this.state;

        this.props.dispatch(addDeck(title));

        saveDeckTitle(title);
        
        this.props.navigation.navigate('Deck',
        {
            deckTitle: title,
        });
    };

    render() {
        const {title} = this.state;

        if (this.props.focused) {
            this.titleChanged('')
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the title?</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Title'
                    value={title}
                    onChangeText={this.titleChanged}
                />
                <TouchableOpacity
                    style={title === '' ? styles.buttonDisabled : styles.button}
                    disabled={title === ''}
                    onPress={this.createDeck}
                >
                    <Text style={styles.buttonText}>Create Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

export default withNavigationFocus(connect()(NewDeck));