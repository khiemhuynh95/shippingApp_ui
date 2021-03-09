import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import colors from '../assets/colors/colors'
const SubHeader = (props) => {
    const {style} = props
    return (
        <View style={[styles.container,style]}>
            <Text style={styles.text}>My Services</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.black,
        width: 315,
        height: 26
    },
    text: {
        color: colors.white
    }
})

export default SubHeader;