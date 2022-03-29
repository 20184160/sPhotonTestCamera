import React from 'react';
import {View,Text,Button} from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen =({navigation})=>{
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Go to Take Photo"
            onPress={()=>navigation.navigate('Take Photo')}/>
        </View>
    )
}
export default HomeScreen;