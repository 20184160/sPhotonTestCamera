import { Button, StyleSheet, View } from "react-native";
import React, { useCallback, useRef, useMemo, useState } from 'react';
import {
    Camera,
    useCameraDevices,
    TakeSnapshotOptions
} from 'react-native-vision-camera';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TakePhoto({ navigation }) {
    const camera = useRef(null);
    const devices = useCameraDevices('wide-angle-camera');
    const [cameraPosition, setCameraPosition] = useState('back');
    const device = devices[cameraPosition]

    const supportsCameraFlipping = useMemo(() => devices.back != null && devices.front != null, [devices.back, devices.front]);

    const onFlipCameraPressed = useCallback(() => {
        setCameraPosition((p) => (p === 'back' ? 'front' : 'back'));
    }, []);
    //#region Camera Capture
    const takePhoto = useCallback(async () => {
        try {
            if (camera.current == null) {
                throw new Error('Camera ref is null!');
            }
            const photo = await camera.current
                .takePhoto(TakeSnapshotOptions)
                .then(res => {
                    let imgPath = `file://${res.path}`;
                    navigation.navigate('View Photo', {
                        uri: `${imgPath}`
                    })

                })

                .catch(err => {
                    console.log(err);
                });
        } catch (e) {
            console.error('Failed to take photo!', e);
        }
    }, [camera]);

    if (device == null) {
        return <View style={{ backgroundColor: 'red' }} />;
    }

    return (
        <View style={{ flex: 1 }}>

            <Camera
                ref={camera}
                photo={true}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
            />
            {
                supportsCameraFlipping &&
                <Button title={'Reverse'} onPress={onFlipCameraPressed} />

            }
            <Button title={'Shoot'} onPress={takePhoto} />
        </View>
    );
}
export default TakePhoto;

const styles = StyleSheet.create({});