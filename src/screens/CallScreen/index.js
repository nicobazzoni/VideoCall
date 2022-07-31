import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CallActionBox from '../../components/CallActionBox'

const CallScreen = () => {
  return (
    <View style={styles.page}>
    <View style={styles.cameraPreview} />
        
        
    <CallActionBox />

  </View>
  )
}



const styles = StyleSheet.create({ 
    page: {
        backgroundColor: '#7b4e80',
        flex: 1,
    },
    cameraPreview: {
       width: 100,
         height: 150,
        backgroundColor: '#ffff6e',
        borderRadius: 10,
        position: 'absolute',
        right: 10,
        top: 100,
    },
    })
    
    export default CallScreen