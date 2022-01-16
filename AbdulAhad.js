/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   TouchableOpacity
 } from 'react-native';
 import Home from './app/screens/description'
 import { NativeBaseProvider, Box } from 'native-base';
 
 
 
 const App = () => {
   return (
     <>
     {/* // <NativeBaseProvider>
     //   <View />
     // </NativeBaseProvider> */}
 
     <View style={{flex:1,backgroundColor:"grey",padding:10}}>
 
       <Text style={{fontSize:20,color:'white'}}>Growing</Text>
 
       <View style={{backgroundColor:'white',flexDirection:'row',padding:30}}>
         {/* <Image source={require("./assets/imgs/apple.pngs")}/> */}
     <Image source={require('./assets/imgs/dummyUser.jpg')} style={{width:80,height:80,borderRadius:40}}/>
         <Text style={{fontSize:30,marginLeft:60,color:'purple'}}>John Allens</Text>
 
     </View>
 
 
       <View style={{backgroundColor:'white',padding:10,flexDirection:'row',alignItems:'center',justifyContent:'space-around',borderTopWidth:1,borderTopColor:'gray'}}>
         
         <TouchableOpacity style={{borderRadius:5,backgroundColor:'grey',padding:10}}>
           <Text style={{color:'white'}}>View Profile</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{padding:5,backgroundColor:'green',padding:10,borderRadius:5}}>
           <Text style={{color:'white'}}>Add Users</Text>
         </TouchableOpacity>
       </View>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     </View>
 
 
     </>
       );
 };
 
 
 const Card = () =>{
   return(
     <View style={{alignItems:'center',justifyContent:'space-around',backgroundColor:'white',padding:5,flexDirection:'row',marginTop:10,borderRadius:5}}>
     <Image source={require('./assets/imgs/dummyUser.jpg')} style={{width:50,height:50,borderRadius:30}}/>
       
       <Text style={{fontWeight:'900'}}>Exmpl</Text>
 
       <TouchableOpacity style={{padding:10,height:40,backgroundColor:'grey',borderRadius:10,width:80,justifyContent:'center'}}>
         <Text style={{color:'white'}}>Btn 1</Text>
       </TouchableOpacity>
 
       <TouchableOpacity style={{padding:10,height:40,backgroundColor:'green',borderRadius:10,width:80,justifyContent:'center'}}>
         <Text style={{color:'white'}}>Btn 2</Text>
       </TouchableOpacity>
     </View>
   )
 }
 
 
 const styles = StyleSheet.create({
   container:{
     flex:1,
     backgroundColor:'white',
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 