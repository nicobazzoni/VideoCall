import React, { useState, useEffect } from 'react'
import {View, FlatList, Text, StyleSheet, TextInput, Pressable} from 'react-native'

import dummyContacts from '../../../assets/data/contacts'
import { useNavigation } from '@react-navigation/core'

const ContactsScreen = () => { 
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredContacts, setFilteredContacts] = useState(dummyContacts)
    
    const navigation = useNavigation()
   useEffect(() => {
    //search 
     const newContacts = 
     dummyContacts.filter(contact => contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase()),
     );
     setFilteredContacts(newContacts)
   }, [searchTerm])

   const callUser = user => { 
    navigation.navigate('Calling', {user: user})
   }
   

   

    return (
        <View style={styles.page}>
            <TextInput value={searchTerm} 
            onChangeText={setSearchTerm} 
            style={styles.SearchInput} 
            placeholder='Search contacts' />
      <FlatList 
      data={filteredContacts} 
      renderItem={({item}) => (
        <Pressable onPress={() => callUser(item)} >
      <Text styles={styles.contactName}> {item.user_display_name} </Text>
      </Pressable>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}

      
      />
      </View>
    )
}

const styles = StyleSheet.create({
    page: {
      padding: 15,
      backgroundColor: 'white',
      flex: 1,
    },
    contactName: { 
      fontSize: 16,
      marginVertical: 10,
  
    },
    separator: { 
      height: 1,
      backgroundColor: '#f0f0f0',
      width: '100%',
    },
    SearchInput: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
    }
  });


  export default ContactsScreen