import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions,StatusBar } from 'react-native';
import  Header  from '.././Header';
import colors from '../../assets/colors/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
    return (
        <View >
            
            <View style={styles.blueArea}>
                <Header></Header>
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
    whiteArea: {
        backgroundColor: colors.white
    },

})

export default HomeScreen;