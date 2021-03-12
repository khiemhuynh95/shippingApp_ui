import React from 'react'
import {Text, View, StyleSheet, TextInput, Image} from 'react-native'
import MyIcons from './MyIcons'


const SearchBar = () => {
    const [value, onChangeText] = React.useState('');
    const filling_icon = require('./../assets/images/ios-filling.png')
    const go_icon = require('./../assets/images/ios-go.png')
    
    const iconSize = {
        width: 20,
        height: 20
    }

    return(
        <View style={styles.container}>
            <MyIcons disabled={true} style={styles.filling_icon} source={filling_icon} size={iconSize} ></MyIcons>
            
                
            <TextInput
                style={styles.textInput}
                placeholder="eg. 4729012"
                onChangeText={text => onChangeText(text)}
                value={value}
            ></TextInput>
            
            <MyIcons style={styles.go_icon} source={go_icon} size={{width: 25, height: 25}} ></MyIcons>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 340,
        height: 60,
        
        alignSelf:'center',
        borderRadius: 10,
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    textInput: {
        alignSelf: 'stretch',
        fontFamily: 'Roboto-Regular',
        width: '70%'
    },
    filling_icon: {
        
        marginHorizontal: 22
    },
    go_icon: {
        marginRight: 22
    }
})

export default SearchBar;