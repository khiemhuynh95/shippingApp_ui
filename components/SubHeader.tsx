import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import colors from '../assets/colors/colors'
const SubHeader = (props) => {
    const {style} = props
    return (
        <View style={[styles.container,style]}>
            <Text style={styles.title}>My Services</Text>
            <TouchableOpacity>
                <Text style={styles.viewAllLabel}>View All</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        
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
        marginRight: 180,
        
    },
    viewAllLabel: {
        fontFamily: 'Roboto-Regular',
        fontWeight: '500',
        letterSpacing: -0.25,
        textAlign: 'right',
        color: colors.yellow,
        fontSize: 14,
        lineHeight: 16
    }
})

export default SubHeader;