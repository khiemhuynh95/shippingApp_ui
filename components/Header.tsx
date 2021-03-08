import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import { Avatar} from 'react-native-elements';
import MyIcons from './MyIcons'

import colors from '../assets/colors/colors';

import { useFonts } from "expo-font";

const Header =() => {
    let [loadedfont] = useFonts({
        'Roboto_Med': require('../assets/fonts/Roboto-Medium.ttf'),
        'Roboto_Reg': require('../assets/fonts/Roboto-Regular.ttf')
    })
    return(
        <View style={styles.container}> 
            <Avatar
                rounded
                source={require('./../assets/images/cat.jpg')}
                size={40}
            ></Avatar>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>Tracker App</Text>
                <Text style={styles.subTitle}>Powered by Panoply</Text>
            </View>
            <MyIcons size={20} source={require('./../assets/images/ios-settings.png')}></MyIcons>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        marginTop: 60,
        marginHorizontal: 30
    },
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: 80
    },
    title: {
        color: colors.white,
        fontFamily: 'Roboto_Med',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        letterSpacing: -0.25,
        marginBottom: 5
    },
    subTitle: {
        color: colors.lightBlue,
        fontFamily: 'Roboto_Reg',
        fontSize: 12,
        lineHeight: 14,
        fontWeight:'normal',
        letterSpacing: -0.21,
    }
});

export default Header;