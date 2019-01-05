import React from 'react';
import { StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import DecksList from "./src/components/DecksList";
import NewDeck from './src/components/NewDeck';
import NewCard from './src/components/NewCard';
import Deck from './src/components/Deck';
import reducers from './src/reducers';
import middleware from './src/middleware';
import Quiz from './src/components/Quiz';
import { setLocalNotification } from './utils/notification';

const Tabs = createBottomTabNavigator({
    DecksList: {
      screen: DecksList,
      navigationOptions: {
          tabBarLabel: 'Decks',
          tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='note-multiple' size={30} color={tintColor} /> 
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
          tabBarLabel: 'Add Deck',
          tabBarIcon: ({tintColor}) => <MaterialIcons name='note-add' size={30} color={tintColor} />
      }
    },
  }, {
      tabBarOptions: {
          activeTintColor: 'teal',
          style: {
              height: 56,
              fontSize: 22,
          }
      }
  });

const Stack = createStackNavigator({
    DecksList: {
        screen: Tabs,
        navigationOptions: {
            title: 'Decks'
        }
    },
    Deck: {
        screen: Deck
    },
    NewCard: {
        screen: NewCard
    },
    Quiz: {
        screen: Quiz
    }
});

const AppContainer = createAppContainer(Stack);

const store = createStore(reducers, middleware);

export default class App extends React.Component {
    componentDidMount () {
        setLocalNotification()
    }

  render() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
