import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'

const MyIcons = (props) => {
    const {size, source, style, disabled} = props;
    return (
        <TouchableOpacity disabled={disabled} style={[{width: size, height: size},style]}>
            <Image source={source} style={{width: size, height: size}}></Image>
        </TouchableOpacity>
        
    )
}

export default MyIcons;