import React from 'react'
import { View, StyleSheet, Image, Text, Animated, FlatList, InteractionManager } from 'react-native'
import BackButton from '../components/backButton'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HeartIcon from '../components/heart';
const Home = () => {
    const [select, getSelected] = React.useState('Categories')
    const [listItems, formList] = React.useState([])
    // const value = React.useState(
    //     new Animated.ValueXY({
    //         x: 0,
    //         y: 0,
    //     }),
    // )[0]
    // const value2 = React.useState(
    //     new Animated.ValueXY({
    //         x: 0,
    //         y: 0,
    //     }),
    // )[0]
    // const value3 = React.useState(
    //     new Animated.ValueXY({
    //         x: wp(90),
    //         y: 0,
    //     }),
    // )[0]
    // const value4 = React.useState(
    //     new Animated.ValueXY({
    //         x: wp(180),
    //         y: 0,
    //     }),
    // )[0]
    // const value5 = React.useState(
    //     new Animated.ValueXY({
    //         x: wp(270),
    //         y: 0,
    //     }),
    // )[0]
    // const moveView = x => {
    //     Animated.timing(value, {
    //         toValue: { x: x, y: 0 },
    //         duration: 300,
    //         useNativeDriver: false,
    //     }).start()
    // }
    // const moveView2 = x => {
    //     Animated.timing(value2, {
    //         toValue: { x: x, y: 0 },
    //         duration: 300,
    //         useNativeDriver: false,
    //     }).start()
    // }
    // const moveView3 = x => {
    //     Animated.timing(value3, {
    //         toValue: { x: x, y: 0 },
    //         duration: 300,
    //         useNativeDriver: false,
    //     }).start()
    // }
    // const moveView4 = x => {
    //     Animated.timing(value4, {
    //         toValue: { x: x, y: 0 },
    //         duration: 300,
    //         useNativeDriver: false,
    //     }).start()
    // }
    // const moveView5 = x => {
    //     Animated.timing(value5, {
    //         toValue: { x: x, y: 0 },
    //         duration: 300,
    //         useNativeDriver: false,
    //     }).start()
    // }
    React.useEffect(() => {
        fetch('https://data.cityofnewyork.us/resource/23z9-6uk9.json', {
            method: 'GET'
        }).then(res => res.json()).then(data =>{
              const arr= data.map(item=>{
                  return item.school_name
              })
               formList(arr)
        }).catch(err => console.log(err))
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={listItems}
                renderItem={({ item }) => {
                    return (
                       <View 
                       style={{
                           width:wp('90%'),
                           alignSelf:'center',
                           borderWidth:1,
                           borderColor:'black',
                           paddingVertical:10,
                           marginTop:20,
                           paddingLeft:10
                       }}
                       >
                       <Text>{item}</Text>
                       </View>
                    )
                }}
            />
         

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageDimension: {
        width: wp('100%'),
        height: hp('45%'),
        resizeMode: 'cover'
    },
    bottomContainer: {
        width: wp('100%'),
        height: hp('60%'),
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#ffffff',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    }
})

export default Home