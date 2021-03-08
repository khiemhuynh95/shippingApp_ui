import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'

const MyIcons = ({size, source}) => {
    return (
        <TouchableOpacity style={{width: size, height: size}}>
            <Image source={source} style={{width: size, height: size}}></Image>
        </TouchableOpacity>
        
    )
}

export default MyIcons;