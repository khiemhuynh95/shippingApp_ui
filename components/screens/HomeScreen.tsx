import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView,StatusBar } from 'react-native';
import  Header  from '.././Header';
import colors from '../../assets/colors/colors';
import SearchBar from '../SearchBar';
import SubHeader from '../SubHeader'


const HomeScreen = () => {
    const background_img1 = require('../../assets/images/1.png')
    const background_img2 = require('../../assets/images/2.png')
    return (
        <View style={styles.container}>
            
            <StatusBar barStyle="light-content"></StatusBar>
            
            <View style={styles.blueArea}>
                <Header></Header>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Track your Shippment</Text>
                    <Text style={styles.subTitle}>Enter tracking code</Text>
                </View>
                <SearchBar></SearchBar>
                
            </View>
            <View style={styles.image_area}>
                <View style={styles.image_box1}>
                    <Image source={background_img1}></Image>
                </View>
                <View style={styles.image_box2}>
                    <Image source={background_img2}></Image>
                </View>
            </View>
            <SubHeader style={styles.subHeader}></SubHeader>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    statusBar: {
        backgroundColor: colors.blue
    },
    blueArea: {
        backgroundColor: colors.blue,
        height: 570,
        borderBottomRightRadius: 30,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
         height: 3
        },
        shadowRadius: 4,
        shadowOpacity: 0.3
        
    },
    image_area: {
        bottom: 285,
        flexDirection: 'row'
    },
    image_box1: {
        top: 40
    },
    image_box2: {
        left: 35,
        top: 5
    },
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 50,
        marginHorizontal: 60,
        
    },
    title: {
        color: colors.white,
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 28,
        textAlign: 'center',
        letterSpacing: -0.5,
        marginBottom: 14
    },
    subTitle: {
        color: colors.white,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        fontWeight:'normal',
        letterSpacing: -0.25,
    },
    subHeader: {
        bottom: 250,
        alignSelf: 'center'
    },

    bottomArea: {
        
        backgroundColor: colors.black,
        zIndex: 0
    },


})

export default HomeScreen;