import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CallActionBox from '../../components/CallActionBox'
import { useNavigation, useRoute } from '@react-navigation/core'


const CallingScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()


  const user = route?.params?.user;
 
  const goBack = () => {
  navigation.goBack()
 }
  
 
 return (
    <View style={styles.page}>
      
      <Pressable onPress={goBack} style={styles.backButton} >
      <Ionicons name="chevron-back" color="white"  size={30} />
      </Pressable>
       
        <View style={styles.cameraPreview}>
      <Text style={styles.name}>{user?.user_display_name}</Text>
      <Text style={styles.phoneNumber}>ringing 917 530 8433</Text>
      </View>
       
   
    <CallActionBox />
    </View> 
  )
}



const styles = StyleSheet.create({
  page: {
        backgroundColor: '#7b4e80',
        height: '100%', 
        },
    
    cameraPreview: {
       
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 10,
        flex:1,
},

name: { 
    fontSize: 30, 
    fontWeight: 'bold', 
     color: 'white', 
     marginBottom: 10, 
    marginTop: 50, },

    

    phoneNumber: { 
        fontSize: 20, 
        color: 'white', 
        },

    backButton: {
        position: 'absolute',
        top: 70,
        left: 20,
        zIndex: 10,

        }, 
})
export default CallingScreen
