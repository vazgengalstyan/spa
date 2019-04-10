import React from 'react'
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from './components/screens/Home/Home'
import List from './components/screens/List/List'
import ItemList from "./components/screens/ItemList/ItemList";
import Basket from "./components/screens/Basket/Basket";

const AppNavigator = createStackNavigator({
    List: {
        screen: List
    },
    Home: {
        screen: Home
    },
    ItemList: {
        screen: ItemList
    },
    Basket: {
        screen: Basket
    }
},{
    headerMode: 'none',
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);