import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import colors from '../../assets/colors/colors'
import MyIcons from '../MyIcons'

const iconSize = {
    width: 23,
    height: 28
}

const ShippmentItem = (props) => {
    const {style, data} = props
    
        
    return(
        <View style={[styles.container,style, {backgroundColor: data.backgroundColor}]}>
            <MyIcons size={iconSize} style={styles.icon} disabled={true} source={data.icon} ></MyIcons>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.subtitle}>{data.subtitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        
        borderRadius: 20,
        width: 320,
        height: 185,
        marginLeft: 30,
        
    },
    textWrapper: {
        marginLeft: 30,
    },
    title: {
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: -0.28,
        color: colors.white,
        marginBottom: 8
        
    },
    subtitle: {
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 26,
        letterSpacing: -0.22,
        color: colors.white,
    },
    icon: {
        marginTop: 36,
        marginLeft: 30,
        marginBottom: 27,
        
    }
})

export default ShippmentItem;