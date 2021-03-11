import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import colors from '../../assets/colors/colors'
const SubHeader = (props) => {
    const {style, title, titleStyle} = props
    return (
        <View style={[styles.container,style]}>
            <Text style={[styles.title,titleStyle]}>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.viewAllLabel}>View All</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 315,
        height: 26
    },
    title: {
        color: colors.darkText,
        fontSize: 20,
        lineHeight: 23,
        letterSpacing: -0.42,
        fontWeight: '500',
        fontFamily: 'Roboto-Medium',
        
    },
    viewAllLabel: {
        fontFamily: 'Roboto-Regular',
        fontWeight: '500',
        letterSpacing: -0.25,
        textAlign: 'right',
        color: colors.yellow,
        fontSize: 14,
        lineHeight: 16,
        
    }
})

export default SubHeader;