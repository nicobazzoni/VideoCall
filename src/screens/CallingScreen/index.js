import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CallingScreen = () => {
  return (
    <View style={styles.page}>
        <View style={styles.cameraPreview}>
      <Text style={styles.name}>Alex</Text>
      <Text style={styles.phoneNumber}>ringing 917 530 8433</Text>
       
   

       
     </View>
     <View style={styles.buttonsContainer}>
      <View style={styles.iconButton} >
        <IonIcons name="ios-camera-reverse" size={30} color={'white'}/>
        </View>

        <View style={styles.iconButton} >
        <MaterialIcons name="camera-off" size={30} color={'white'}/>
        </View>
        <View style={styles.iconButton} >
        <MaterialIcons name="microphone-off" size={30} color={'white'}/>
        </View>

        <View style={[styles.iconButton, {backgroundColor: 'red'}]} >
        <MaterialIcons name="phone-hangup" size={30} color={'white'}/>
        </View>
       </View>
    </View> 
  )
}

export default CallingScreen

styles ={
    cameraPreview: {
    backgroundColor: '#7b4e80',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
    flex:1,
},

name: { 
    fontSize: 30, 
    fontWeight: 'bold', 
     color: '#fff', 
     marginBottom: 10, 
    marginTop: 50, },

    page: {
        backgroundColor: '#7b4e80',
        height: '100%', 
        width: '100%' },

    phoneNumber: { 
        fontSize: 20, 
        color: '#fff', 
        },

    buttonsContainer: { 
        
        backgroundColor: '#333333',
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 40,
        },

        iconButton: {
          backgroundColor: '#4a4a4a',
          padding: 15,
          borderRadius: 50,
        }
}

