import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
const BackButton = () => {
    return (
        <View style={styles.boxDimensions}>
            <Icon
                name='left'
                size={wp(5)}
                color='black'
            />
        </View>
    )
}
const styles = StyleSheet.create({
    boxDimensions: {
        width: wp('13%'),
        height: 'auto',
        alignItems: 'center',
        paddingVertical: wp(4),
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
        position: 'absolute',
        top: wp(7),
        left: wp(5),
    },
  
})
export default BackButton