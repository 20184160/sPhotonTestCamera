import React from 'react';
import {View,Text,Button,Image,StyleSheet} from 'react-native'

const ViewPhoto =({route,navigation})=>{
    const source = {uri :route.params.uri};
    console.log(source.uri);
    const saveImage =() =>{
        
    }
    return (
        <View style={{flex:1}}>
            <Image source={source} style={StyleSheet.absoluteFill} resizeMode="cover"/>
            <Button title="Back to HomePage"
            onPress={()=>navigation.navigate('Home')}/>
            <Button title='Save' 
            onPress={saveImage}/>

        </View>
    )
}
export default ViewPhoto;