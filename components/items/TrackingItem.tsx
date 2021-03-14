import React from 'react'
import {View, Text, StyleSheet, Image,Dimensions} from 'react-native'
import colors from '../../assets/colors/colors'
import MyIcons from '../MyIcons'

const iconSize = {
    width: 50,
    height: 50
}

const shawdow = {
        
        shadowColor: '#000000',
        shadowOffset: {
          width: 2,
         height: 11
        },
        shadowRadius: 9,
        shadowOpacity: 0.15
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const TrackingItem = (props) => {
    const {style, data, isActive} = props
    return(
        <View style={[styles.container,style]}>
            <MyIcons style={[styles.icon, isActive ? shawdow : {}]} disabled={true} source={data.icon} size={iconSize}></MyIcons>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.subtitle}>{data.subtitle}</Text>
            </View>
            <Text style={styles.date}>{data.date}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        
        alignItems: 'center',
        marginBottom: 35
        
    },
    textWrapper: {
        
        width: 200,
    },
    title: {
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: -0.28,
        color: colors.darkText,
        marginBottom: 8
        
    },
    subtitle: {
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: -0.22,
        color: colors.lightText,
    },
    icon: {
        marginRight: 30
    },
    date: {
        position: 'absolute',
        color: colors.lightText,
        top: 30,
        right: windowWidth*0.01
    },
    
})

export default TrackingItem;