import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import { Avatar} from 'react-native-elements';
import MyIcons from '../MyIcons'

import colors from '../../assets/colors/colors';
import AppLoading from 'expo-app-loading';
import { useFonts } from "expo-font";

const icon_size = {
    width: 20,
    height: 20
}

const Header =(props) => {

    const {onIconPress,lightContent, style} = props

    const titleColor = lightContent ? colors.white : colors.black
    const setting_icon = lightContent ? require('./../../assets/images/ios-settings.png')
                                   : require('./../../assets/images/ios-settings-dark.png')

    let [loadedfont] = useFonts({
        'Roboto-Medium': require('./../../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Regular': require('./../../assets/fonts/Roboto-Regular.ttf')
    });
    if(!loadedfont) {
        return <AppLoading></AppLoading>
    }
    else {
            return(
                <View style={[styles.container,style]}> 
                    <View style={styles.avatar}>
                        <Avatar
                            rounded
                            source={require('./../../assets/images/cat.jpg')}
                            size={40}
                        ></Avatar>
                    </View>
                    
                    <View style={styles.textWrapper}>
                        <Text style={[styles.title, {color: titleColor}]}>Tracker App</Text>
                        <Text style={styles.subTitle}>Powered by Panoply</Text>
                    </View>
                    <MyIcons onPress={onIconPress} style={styles.icon} size={icon_size} source={setting_icon}></MyIcons>
                </View>
            )
    }
        
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        marginTop: 60,
        marginHorizontal: 30,
    },
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: 90
    },
    title: {
        
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        letterSpacing: -0.25,
        marginBottom: 5
    },
    subTitle: {
        color: colors.lightBlue,
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        lineHeight: 14,
        fontWeight:'normal',
        letterSpacing: -0.21,
    },
    icon: {
        position: 'absolute',
        right: 0
    },
    avatar: {
        position: 'absolute',
        left: 5
    }
});

export default Header;