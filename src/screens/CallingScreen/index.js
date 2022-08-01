import { View, 
  Text, 
  StyleSheet, 
  Pressable,
  PermissionsAndroid,
  Alert,
  Platform } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CallActionBox from '../../components/CallActionBox'
import { useNavigation, useRoute } from '@react-navigation/core'

const permissions = [
  PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  PermissionsAndroid.PERMISSIONS.CAMERA,
];


const CallingScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()


  const user = route?.params?.user;
 
  const goBack = () => {
  navigation.goBack()
 }

 useEffect(() => {
  const getPermissions = async () => {
    const granted = await PermissionsAndroid.requestMultiple(permissions);
    const recordAudioGranted =
      granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === 'granted';
    const cameraGranted =
      granted[PermissionsAndroid.PERMISSIONS.CAMERA] === 'granted';
    if (!cameraGranted || !recordAudioGranted) {
      Alert.alert('Permissions not granted');
    } else {
      setPermissionGranted(true);
    }
  };

  if (Platform.OS === 'android') {
    getPermissions();
  } else {
    setPermissionGranted(true);
  }
}, []);

useEffect(() => {
  if (!permissionGranted) {
    return;
  }

  const callSettings = {
    video: {
      sendVideo: true,
      receiveVideo: true,
    },
  };

  const makeCall = async () => {
    call.current = await voximplant.call(user.user_name, callSettings);
    subscribeToCallEvents();
  };

  const answerCall = async () => {
    subscribeToCallEvents();
    endpoint.current = call.current.getEndpoints()[0];
    subscribeToEndpointEvent();
    call.current.answer(callSettings);
  };

  const subscribeToCallEvents = () => {
    call.current.on(Voximplant.CallEvents.Failed, callEvent => {
      showError(callEvent.reason);
    });
    call.current.on(Voximplant.CallEvents.ProgressToneStart, callEvent => {
      setCallStatus('Calling...');
    });
    call.current.on(Voximplant.CallEvents.Connected, callEvent => {
      setCallStatus('Connected');
    });
    call.current.on(Voximplant.CallEvents.Disconnected, callEvent => {
      navigation.navigate('Contacts');
    });
    call.current.on(
      Voximplant.CallEvents.LocalVideoStreamAdded,
      callEvent => {
        setLocalVideoStreamId(callEvent.videoStream.id);
      },
    );
    call.current.on(Voximplant.CallEvents.EndpointAdded, callEvent => {
      endpoint.current = callEvent.endpoint;
      subscribeToEndpointEvent();
    });
  };

  const subscribeToEndpointEvent = async () => {
    endpoint.current.on(
      Voximplant.EndpointEvents.RemoteVideoStreamAdded,
      endpointEvent => {
        setRemoteVideoStreamId(endpointEvent.videoStream.id);
      },
    );
  };

  const showError = reason => {
    Alert.alert('Call failed', `Reason: ${reason}`, [
      {
        text: 'Ok',
        onPress: navigation.navigate('Contacts'),
      },
    ]);
  };

  if (isIncomingCall) {
    answerCall();
  } else {
    makeCall();
  }
  return () => {
    call.current.off(Voximplant.CallEvents.Failed);
    call.current.off(Voximplant.CallEvents.ProgressToneStart);
    call.current.off(Voximplant.CallEvents.Connected);
    call.current.off(Voximplant.CallEvents.Disconnected);
  };
}, [permissionGranted]);

const onHangupPress = () => {
  call.current.hangup();
};
  
 
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