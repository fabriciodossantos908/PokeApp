import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PokeList from '../pages/PokeList';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} >
                <Screen name="PokeList" component={PokeList} />
            </Navigator>
        </NavigationContainer>


    )

}

export default AppStack;