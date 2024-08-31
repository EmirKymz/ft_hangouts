import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { createContact } from '../service/ContactUtils';

function MessagesScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Messages Screen</Text>
    </View>
  );
}

function ContactsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Contacts Screen</Text>
    </View>
  );
}

function TabNavigator() {
  const [selectedTab, setSelectedTab] = useState('Messages');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.actionBar}>
        <Text style={styles.actionBarText}>ft_hangouts</Text>
        {selectedTab === 'Contacts' && (
          <TouchableOpacity style={styles.addButton} onPress={createContact}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.screenContainer}>
        {selectedTab === 'Messages' ? <MessagesScreen /> : <ContactsScreen />}
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={selectedTab === 'Messages' ? styles.activeTab : styles.tab}
          onPress={() => setSelectedTab('Messages')}
        >
          <Text>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedTab === 'Contacts' ? styles.activeTab : styles.tab}
          onPress={() => setSelectedTab('Contacts')}
        >
          <Text>Contacts</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#6200ea',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  actionBarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  addButtonText: {
    fontSize: 24,
    color: '#6200ea',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigator;
