/* // App.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, View, Alert, Button } from 'react-native';
import { createTables, addContact, getContacts, deleteContact } from './src/database/Database';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Tabloları oluştur
    createTables();

    // Test için bir kullanıcı ekle
    //addContact('John Doe', '555-1234', 'john.doe@example.com', '123 Main St', 'ACME Corp');

    // Kişileri yükle
    getContacts(setContacts);
  }, []);

  const loadContacts = () => {
    getContacts(setContacts);
  };
  

  const renderItem = ({ item }: any) => {
    const handleDelete = () => {
      Alert.alert(
        "Delete Contact",
        "Are you sure you want to delete this contact?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Delete",
            onPress: () => {
              deleteContact(item.id);
              loadContacts();
            },
            style: "destructive"
          }
        ]
      );
    };
  
    return (
      <View style={{ padding: 10 }}>
        <Text>ID: {item.id}</Text>
        <Text>Name: {item.name}</Text>
        <Text>Phone: {item.phone}</Text>
        <Text>Email: {item.email}</Text>
        <Text>Address: {item.address}</Text>
        <Text>Company: {item.company}</Text>
        <Button title="Delete" onPress={handleDelete} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default App;
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TabNavigator from './src/navigator/TabNavigator'; // TabNavigator bileşenini içe aktarın

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TabNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
