import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
const HeartIcon = () => {
    var obj = {
        amount: 123.45,
        currency: "QAR",
        order_id: "123456",
        client: {
            name: "John Doun",
            phone: "+974 7777 7777",
            email: "client@domain.com"
        },
            language: "en",
        success_url: "http://domain.com/payments/success",
        failure_url: "http://domain.com/payments/failure",
        fcm_token: "abdc@123",
        save_token: true,
        note: "test payment"
    }
       {/* <Image
                source={{
                    uri: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                }}
                style={
                    styles.imageDimension
                }
            />
            <BackButton />
            <View style={styles.bottomContainer}>
                <View
                    style={{
                        width: wp('90%'),
                        alignSelf: 'center',
                        height: 'auto',
                        marginTop: wp(10),
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <View
                        style={{
                            width: wp('55%'),
                            height: 'auto',
                            marginTop: wp(1)
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Poppins-Bold',
                                fontSize: wp(6),
                                color: '#000',
                            }}
                        >
                            Primrose Cottage
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Poppins-Regular',
                                fontSize: wp(4),
                                color: 'gray',
                            }}
                        >
                            Pretty self-explanatory
                        </Text>
                    </View>

                    <View
                        style={{
                            width: wp('35%'),
                            height: 'auto',
                            alignItems: 'flex-end'
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Poppins-Bold',
                                fontSize: wp(6.5),
                                color: '#000',
                                textAlign: 'center'
                            }}
                        >
                            $ 1300
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Poppins-Regular',
                                fontSize: wp(4),
                                color: 'gray',
                                textAlign: 'center'
                            }}
                        >
                            Per Month
                        </Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    width: wp('90%'),
                    alignSelf: 'center',
                    height: 'auto',
                    marginTop: wp(15),
                }}
            >
                <Text
                    style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: wp(4),
                        color: 'gray',
                        width: wp('70%'),
                        lineHeight: wp(8)
                    }}
                >
                    "If you love the wild animals, fires and any thing that would make you wild then it place is for you"
                </Text>
            </View>
            <View
                style={{
                    width: wp('90%'),
                    alignSelf: 'center',
                    height: 'auto',
                    marginTop: wp(5),
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                {(select === 'Categories') ?
                    <Text
                        style={{
                            fontFamily: 'Poppins-Regular',
                            fontSize: wp(4),
                            color: 'green',
                        }}
                        onPress={
                            () => moveView(wp(0))
                        }
                    >
                        Category
                    </Text>
                    :
                    <Text
                        style={{
                            fontFamily: 'Poppins-Regular',
                            fontSize: wp(4),
                            color: 'gray',
                        }}
                        onPress={
                            () => {
                                moveView(wp(0))
                                moveView2(wp(0))
                                moveView3(wp(90))
                                moveView4(wp(180))
                                moveView5(wp(270))
                                getSelected('Categories')
                        }}
                    >
                        Category
                    </Text>
                }

                {(select === 'NearBy') ?
                    <Text
                        style={{
                            fontFamily: 'Poppins-Regular',
                            fontSize: wp(4),
                            color: 'green',
                        }}
                        onPress={
                            () => moveView(wp(0))
                        }
                    >
                        NearBy
                    </Text>
                    :
                    <Text
                        style={{
                            fontFamily: 'Poppins-Regular',
                            fontSize: wp(4),
                            color: 'gray',
                        }}
                        onPress={
                            () => {
                                moveView(wp(27))
                                moveView2(wp(-120))
                                moveView3(wp(-90))
                        
                                getSelected('NearBy')
                        }}
                    >
                        NearBy
                    </Text>
                }
                {(select === 'Reviews') ?
                    <Text
                        style={{
                            fontFamily: 'Poppins-Regular',
                            fontSize: wp(4),
                            color: 'green',
                        }}
                        onPress={
                            () => moveView(wp(0))
                        }
                    >
                        Reviews
                    </Text>
                    :
                    <Text
                        style={{
                            fontFamily: 'Poppins-Regular',
                            fontSize: wp(4),
                            color: 'gray',
                        }}
                        onPress={
                            () => {
                                moveView(wp(51))
                                moveView2(wp(-270))
                                moveView3(wp(-240))
                                moveView4(wp(-180))
                                getSelected('Reviews')
                        }}
                    >
                        Reviews
                    </Text>
                }
                {(select === 'Service') ?
                    <Text
                        style={{
                            fontFamily: 'Poppins-Regular',
                            fontSize: wp(4),
                            color: 'green',
                        }}
                        onPress={
                            () => moveView(wp(0))
                        }
                    >
                        Service
                    </Text>
                    :
                    <Text
                        style={{
                            fontFamily: 'Poppins-Regular',
                            fontSize: wp(4),
                            color: 'gray',
                        }}
                        onPress={
                            () => {
                                moveView(wp(76))
                                moveView2(wp(-360))
                                moveView3(wp(-270))
                                moveView4(wp(-280))
                                moveView5(wp(-270))

                                getSelected('Service')
                        }}
                    >
                        Service
                    </Text>
                }
            </View>
            <View
                style={{
                    width: wp('90%'),
                    alignSelf: 'center',
                    height: 'auto',
                }}
            >
                <Animated.View style={value.getLayout()}>
                    <View
                        style={{
                            width: wp('5%'),
                            height: hp('.5%'),
                            borderRadius: 50,
                            backgroundColor: 'green'
                        }}
                    ></View>
                </Animated.View>
                <View style={{
                    flexDirection:'row',
                }}>
                <Animated.View style={value2.getLayout()}>
                    <View
                        style={{
                            width: wp('90%'),
                            height: hp('15%'),
                            borderRadius: 15,
                            marginTop:wp(10),
                            backgroundColor: 'orange',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    >
                        <Text>Category</Text>
                        </View>
                </Animated.View>
                <Animated.View style={value3.getLayout()}>
                    <View
                        style={{
                            width: wp('90%'),
                            height: hp('15%'),
                            borderRadius: 15,
                            marginTop:wp(10),
                            backgroundColor: 'yellow',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    >
                        <Text>Near By</Text>
                    </View>
                </Animated.View>
                <Animated.View style={value4.getLayout()}>
                    <View
                        style={{
                            width: wp('90%'),
                            height: hp('15%'),
                            borderRadius: 15,
                            marginTop:wp(10),
                            backgroundColor: 'purple',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    >
                        <Text>Reviews</Text>
                    </View>
                </Animated.View>
                <Animated.View style={value5.getLayout()}>
                    <View
                        style={{
                            width: wp('90%'),
                            height: hp('15%'),
                            borderRadius: 15,
                            marginTop:wp(10),
                            backgroundColor: 'red',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    >
                        <Text>Service</Text>
                    </View>
                </Animated.View>
                </View>
            </View>
            <HeartIcon /> */}
    return (
        <View style={styles.boxDimensions}>
            <Icon
                name='md-heart-outline'
                size={wp(8)}
                color='red'
                onPress={()=>{
                    fetch('https://api.fatora.io/v1/payments/checkout',{
                        method:'POST',
                        headers:{
                            'Content-Type': 'application/json',
                            'api_key':'E4B73FEE-F492-4607-A38D-852B0EBC91C9'
                        },
                        body:JSON.stringify(obj)
                    }
                    ).then(res=>res.json()).then(data=>console.log('mydata',data)).catch(err=>console.log)
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    boxDimensions: {
        width: wp('15%'),
        height: 'auto',
        alignItems: 'center',
        paddingVertical: wp(4),
        backgroundColor: '#f5f5f5',
        borderRadius:15,
        position: 'absolute',
        top: wp(58),
        right: wp(10),
    },
  
})
export default HeartIcon