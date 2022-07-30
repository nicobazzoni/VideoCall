import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import bg from '../../../assets/images/iosbg.jpeg'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'


const IncomingCallScreen = () => {
  return (
    
        <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
      <Text style={styles.name} >Broseph</Text>
      <Text style={styles.phoneNumber} >Video Call</Text>

    <View style={[styles.row, {marginTop: 'auto'}]} > 
        <View style={styles.iconContainer} >
        <Ionicons name="alarm" size={30} color={'white'}/>
            <Text style={styles.iconText} >Remind Me</Text>
        </View>
        
        <View style={styles.iconContainer} >
            <Entypo name="message" size={30} color={'white'}/>

            <Text style={styles.iconText} >Message</Text>
         </View>
        </View>

        <View style={styles.row} > 
        <View style={styles.iconContainer} >
            <View style={styles.iconButtonContainer} >
        <Feather name="x" size={30} color={'white'}/>
            </View>
            
            <Text style={styles.iconText} >Decline</Text>
        </View>
        <View style={styles.iconContainer} >
            <View style={[styles.iconButtonContainer, {backgroundColor: '#2e7bff'}]} >
            <Feather name="check" size={30} color={'white'}/>
            </View>

            <Text style={styles.iconText} >Accept</Text>
         </View>
        </View>
      </ImageBackground>
  


  )
}

const styles = StyleSheet.create({

  
name: { 
    fontSize: 30, 
    fontWeight: 'bold', 
     color: '#fff', 
     marginBottom: 10, 
    marginTop: 100, },

   

    phoneNumber: { 
        fontSize: 20, 
        color: '#fff', 
        },

   

        bg: {
            flex: 1,
            backgroundColor: 'red',
            alignItems: 'center',
            padding: 10,
        },

        row: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            
           
        },

        iconContainer: { 
            alignItems: 'center',
            marginVertical: 20,
        },
        iconText: {  
            color: 'white',
            marginTop: 10,
        },
        iconButtonContainer: {
            borderRadius: 50,
            padding: 20,
            backgroundColor: 'red',
            margin: 10,
        }
})

export default IncomingCallScreen;

