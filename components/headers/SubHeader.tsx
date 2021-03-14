import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native'
import colors from '../../assets/colors/colors'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
        
    },
    title: {
        color: colors.darkText,
        fontSize: 20,
        lineHeight: 23,
        letterSpacing: -0.42,
        fontWeight: '500',
        fontFamily: 'Roboto-Medium',
        left: windowWidth*0.04,
        textAlign: 'center',
        position: "absolute"
        
    },
    viewAllLabel: {
        position: 'absolute',
        fontFamily: 'Roboto-Regular',
        fontWeight: '500',
        letterSpacing: -0.25,
        textAlign: 'right',
        color: colors.yellow,
        fontSize: 14,
        lineHeight: 16,
        right: windowWidth*0.08,
        top: -10
    }
})

export default SubHeader;