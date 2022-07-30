import React, { useState, useEffect } from 'react'
import {View, FlatList, Text, StyleSheet, TextInput} from 'react-native'

import dummyContacts from '../../../assets/data/contacts'


const ContactsScreen = () => { 
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredContacts, setFilteredContacts] = useState(dummyContacts)
    
   useEffect(() => {
    //search 
     const newContacts = 
     dummyContacts.filter(contact => contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase()),
     );
     setFilteredContacts(newContacts)
   }, [searchTerm])
   

   

    return (
        <View style={styles.page}>
            <TextInput value={searchTerm} 
            onChangeText={setSearchTerm} 
            style={styles.SearchInput} 
            placeholder='Search contacts' />
      <FlatList 
      data={filteredContacts} 
      renderItem={({item}) => (
      <Text styles={styles.contactName}> {item.user_display_name} </Text>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}

      
      />
      </View>
    )
}

const styles = StyleSheet.create({
    page: {
      padding: 15,
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