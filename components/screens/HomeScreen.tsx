import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Dimensions } from 'react-native';
import  Header  from '../headers/Header';
import colors from '../../assets/colors/colors';
import SearchBar from '../SearchBar';
import SubHeader from '../headers/SubHeader'
import ServiceItem from '../items/ServiceItem'
import Svg from 'react-native-svg';

import Illustration1 from '../../assets/images/1.svg'
import Illustration2 from '../../assets/images/2.svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data = [
    {
        icon: require('../../assets/images/fly.png'),
        title: 'Shipping',
        subtitle: 'Secure Delivery'
    },
    {
        icon: require('../../assets/images/location.png'),
        title: 'Location',
        subtitle: 'Nation Wide'
    }
]
const keyExtractor = (item) => item.title;
const renderItem = ({item}) => {
    return (
      <ServiceItem data={item}></ServiceItem>
    );
};

const HomeScreen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            
            <StatusBar barStyle="light-content"></StatusBar>
            
            <View style={styles.blueArea}>
                <Header onIconPress={()=>{navigation.navigate('History')}}></Header>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Track your Shippment</Text>
                    <Text style={styles.subTitle}>Enter tracking code</Text>
                </View>
                <SearchBar style={styles.searchBar}></SearchBar>
                
            </View>
            <View style={styles.image_area}>
                
                <Illustration1 style={styles.image_box1} ></Illustration1>
                <Illustration2 style={styles.image_box2} ></Illustration2>
                
            </View>

            
            <View style={styles.bottomArea}>     
                <SubHeader  title="My Services" 
                         
                            style={styles.subHeader}>            
                </SubHeader>
                <FlatList
                    horizontal={true}
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                />
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
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
        shadowOpacity: 0.4
        
    },
    image_area: {
        bottom: 285,
        flexDirection: 'row'
    },
    image_box1: {

        top: 40
    },
    image_box2: {
        position: 'absolute',
        right: 0,
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
        
        
        marginBottom: 50,
        marginTop: 40
        
    },

    bottomArea: {
        bottom: 275,
        height: '100%',
        width: '100%'
    },
    searchBar: {
        
        marginHorizontal: 30,
        
    }

})

export default HomeScreen;