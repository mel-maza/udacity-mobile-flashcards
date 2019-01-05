import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import DeckInfo from './DeckInfo';
import {deleteDecks} from '../../utils/api';
import {handleInitialData} from '../actions/shared';
import { deleteDecksfromStore } from '../actions/decks';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    innerContainer: {
        height: 350,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    button: {
        padding: 10,
        backgroundColor: 'darkturquoise',
        margin: 10,
        borderRadius: 5
    },
    buttonDelete: {
        padding: 10,
        backgroundColor: 'royalblue',
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '800'
    }
})

class DecksList extends Component {
    state={
        opacity: new Animated.Value(1)
    }

    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    fadeOutAndNavigate = (key) => {
        const {opacity} = this.state;

        Animated.timing(opacity,{toValue: 0, duration: 1500})
            .start()

        setTimeout(() => opacity.stopAnimation(({value}) => {
            this.resetOpacity();
            this.props.navigation.navigate(
                'Deck',
                {
                    deckTitle: key,
                })
            }), 1500);
    }

    resetOpacity = () => {
        this.setState(() => ({
            opacity: new Animated.Value(1)
        }))
    }

    deleteDecks = () => {

        this.props.dispatch(deleteDecksfromStore());

        deleteDecks();
    };

    render() {
        const {decks} = this.props; 
        const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);
        
        if (!decks || decks === undefined) {
            return <View style={[styles.container]}>
                <Text style={[styles.buttonText]}>No Decks! Create a new one</Text>
            </View>
        }
    

        return (
            <View style={[styles.container]}>
                {Object.keys(decks).map((key) => {
                    return (
                        <AnimatedButton
                            key={key}
                            style={[styles.button, {opacity: this.state.opacity}]}
                            onPress={() => this.fadeOutAndNavigate(key)}
                        >
                            <DeckInfo deckTitle={key}/>
                        </AnimatedButton>
                    )
                })}
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        style={[styles.buttonDelete]}
                        onPress={this.deleteDecks}
                    >
                        <Text style={[styles.buttonText]}>Delete Decks</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

function mapStateToProps({decks}) {
    return {
        decks: decks
    }
}

export default connect(mapStateToProps)(DecksList);