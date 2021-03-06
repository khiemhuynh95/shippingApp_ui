import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, FlatList, Dimensions} from 'react-native';
import colors from '../../assets/colors/colors'
import Header from '../headers/Header'
import SubHeader from '../headers/SubHeader'
import ShippmentItem from '../items/ShippmentItem'
import TrackingItem from '../items/TrackingItem';
const data = [
    {
        icon: require('../../assets/images/logo-apple.png'),
        title: 'iPhone 12 Pro Max',
        subtitle: 'Shipped on February 14, 2020',
        backgroundColor: colors.blue
    },
    {
        icon: require('../../assets/images/logo-apple.png'),
        title: 'MacBook Pro 2019',
        subtitle: 'Shipped on February 20, 2021',
        backgroundColor: colors.yellow
    }
]

const tracking_data = [
    {
        title: "Delivered to you",
        subtitle: "San Francisco, CA",
        icon: require('../../assets/images/fly.png'),
        date: "March 14"
    },
    {
        title: "Arrived to destination",
        subtitle: "San Francisco, CA",
        icon: require('../../assets/images/location-gray.png'),
        date: "March 12"
    },
    {
        title: "Traveling to you",
        subtitle: "Dallas, TX",
        icon: require('../../assets/images/airplane.png'),
        date: "March 10"
    },
    {
        title: "Shipped fron Charles",
        subtitle: "San Francisco, CA",
        icon: require('../../assets/images/fly-gray.png'),
        date: "March 11"
    }
]

const keyExtractor = (item) => item.title;
const renderItem = ({item}) => {
    return (
      <ShippmentItem data={item}></ShippmentItem>
    );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HistoryScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"></StatusBar>
            <Header onIconPress={()=>{navigation.goBack()}} style={styles.header} lightContent={false}></Header>     
            <SubHeader style={styles.subHeader} 
                       title="Active Shippments"
                       >
            </SubHeader>
            <View style={styles.listContainer}>
                <FlatList
                    horizontal={true}
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                />
            <SubHeader style={styles.subHeader}
                           title="History"
                           >
                </SubHeader>
            </View>
            
            <View style={styles.bottomArea}>
                
                
                <View style={styles.line}></View>
                <View style={styles.itemContainer}>
                    <TrackingItem isActive={true} data={tracking_data[0]}></TrackingItem>
                    <TrackingItem data={tracking_data[1]}></TrackingItem>
                    <TrackingItem data={tracking_data[2]}></TrackingItem>
                    <TrackingItem data={tracking_data[3]}></TrackingItem>
                    
                </View>
                
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
     
        marginBottom: 20
    },
    subHeader: {
        marginBottom: 30,
        marginTop: 50,
    },
    listContainer: {
        marginTop: 20
    },

    bottomArea: {
        
        marginHorizontal: 30,
        
        marginBottom: 40,
        
    },
    itemContainer: {
        marginTop: 25,
       
        height: '100%',
        
        zIndex: 1
    },
    line: {
        position: 'absolute',
        width: 2,
        height: 260,
        backgroundColor: colors.lightGray,
        left: 25,
        zIndex: 0,
        top: '5%'
        
    }

})

export default HistoryScreen;