import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import colors from '../../assets/colors/colors'
import MyIcons from '../MyIcons'

const ServiceItem = (props) => {
    const {style, data} = props
    return(
        <View style={[styles.container,style]}>
            <MyIcons style={styles.icon} disabled={true} source={data.icon} size={50}></MyIcons>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.subtitle}>{data.subtitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.lightGray,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 235,
        height: 118,
        
        marginLeft: 30,
    },
    textWrapper: {

    },
    title: {
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: -0.28,
        color: colors.darkText,
        
    },
    subtitle: {
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 26,
        letterSpacing: -0.22,
        color: colors.lightText,
    },
    icon: {
        marginRight: 15
    }
})

export default ServiceItem;