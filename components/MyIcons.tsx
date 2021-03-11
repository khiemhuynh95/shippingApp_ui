import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'

const MyIcons = (props) => {
    const {size, source, style, disabled} = props;
    return (
        <TouchableOpacity disabled={disabled} style={style}>
            <Image source={source} style={{width: size.width, height: size.height}}></Image>
        </TouchableOpacity>
        
    )
}

export default MyIcons;