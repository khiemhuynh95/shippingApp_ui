import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions,StatusBar } from 'react-native';
import  Header  from '.././Header';
import colors from '../../assets/colors/colors';
import SearchBar from '../SearchBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
    return (
        <View >
            <StatusBar barStyle="light-content"></StatusBar>
            <View style={styles.blueArea}>
                <Header></Header>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Track your Shipment</Text>
                    <Text style={styles.subTitle}>Enter tracking code</Text>
                </View>
                <SearchBar></SearchBar>
            </View>
            <View style={styles.whiteArea}>

            </View>
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
        height: 550
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

    whiteArea: {
        backgroundColor: colors.white
    },


})

export default HomeScreen;