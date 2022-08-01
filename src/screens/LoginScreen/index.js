import { View, TextInput, Text, StyleSheet, Pressable} from 'react-native'
import React, {useState} from 'react'

const LoginScreen = () => {

    const [ username, setUsername ] = React.useState('')
    const [ password, setPassword ] = React.useState('')

    const signIn = () => {}
  
    return (
    <View style={styles.page}>
      <TextInput 
      value={username} 
      onChangeText={setUsername} 
      placeholder="username" 
      style={styles.input}
      autoCapitalize="none"
      />
      <TextInput 
      value={password} 
      onChangeText={setPassword} 
      placeholder="password" 
      style={styles.input} 
      secureTextEntry />
  
    <Pressable  style={styles.button} onPress={signIn}> 
    <Text> Sign In </Text>
     </Pressable>  
    
    </View>

  )
}

const styles = StyleSheet.create({
    page:{
        padding: 10,
        alignItems: 'stretch',
        flex: 1,
        justifyContent: 'center',
    },
    input: { 
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,

    },

    button: { 
        backgroundColor: 'dodgerblue',
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,

    }

})

export default LoginScreen    