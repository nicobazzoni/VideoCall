import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useState} from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CallActionBox = () => {

    const [isCameraOn, setIsCameraOn] = useState(false)
    const [isMicOn, setIsMicOn] = useState(false)

    const onReverseCamera = () => {}
    
    const onToggleCamera = () => { setIsCameraOn(currentValue => !currentValue)}
    
    const onToggleMicrophone = () => { setIsMicOn(currentValue => !currentValue)}
    
    const onHangup = () => {}
  return (
    <View style={styles.buttonsContainer}>
    
    <Pressable onPress={onReverseCamera} style={styles.iconButton} >
      <IonIcons name="ios-camera-reverse" size={30} color={'white'}/>
      </Pressable>

      <Pressable onPress={onToggleCamera} style={styles.iconButton} >
      <MaterialIcons 
      name={isCameraOn ? "camera-off" : 'camera'} 
      size={30} color={'white'}/>
      </Pressable>
      
      <Pressable onPress={onToggleMicrophone} style={styles.iconButton} >
      <MaterialIcons 
      name={ isMicOn ? "microphone-off" : 'microphone'} 
      size={30} color={'white'}/>
      </Pressable>

      <Pressable onPress={onHangup} style={[styles.iconButton, {backgroundColor: 'red'}]} >
      <MaterialIcons name="phone-hangup" 
      size={30} 
      color={'white'}/>
      </Pressable>
     </View>
  )
}

export default CallActionBox

const styles = StyleSheet.create({ 
    buttonsContainer: { 
        
        backgroundColor: '#333333',
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 40,
        marginTop: 'auto',
        },

        iconButton: {
          backgroundColor: '#4a4a4a',
          padding: 15,
          borderRadius: 50,
        }
})