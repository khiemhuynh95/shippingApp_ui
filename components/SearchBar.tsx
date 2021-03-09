import React from 'react'
import {Text, View, StyleSheet, TextInput, Image} from 'react-native'
import MyIcons from './MyIcons'


const SearchBar = () => {
    const [value, onChangeText] = React.useState('');
    const filling_icon = require('./../assets/images/ios-filling.png')
    const go_icon = require('./../assets/images/ios-go.png')
    
    return(
        <View style={styles.container}>
            <MyIcons style={styles.filling_icon} source={filling_icon} size={20} ></MyIcons>
            
                
            <TextInput
                style={styles.textInput}
                placeholder="eg. 4729012"
                onChangeText={text => onChangeText(text)}
                value={value}
            ></TextInput>
            
            <MyIcons style={styles.go_icon} source={go_icon} size={25} ></MyIcons>
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
        //backgroundColor: 'black',
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