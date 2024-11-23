import { StyleSheet, View, Text, FlatList } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const activitiesData = [
    { id: '1', name: 'Socials', icon: 'glass-cheers', backgroundColor: Colors.primaryColorYellow, iconColor: 'white' },
    { id: '2', name: 'Conferences', icon: 'microphone', backgroundColor: '#3220FF', iconColor: 'white' }
];

const NotificationActivities = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={[styles.iconContainer, { backgroundColor: item.backgroundColor }]}>
        <FontAwesome5 name={item.icon} size={20} color={item.iconColor} />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activities</Text>
      <FlatList
        data={activitiesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={styles.listContainer}
      />
    </View>
  )
}

export default NotificationActivities

const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
      paddingHorizontal: 5
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      alignItems: 'flex-start',
      marginBottom: 10
    },
    listContainer: {
      paddingVertical: 10
    },
    itemContainer: {
      alignItems: 'center',
      marginBottom: 10,
      marginRight: 10, 
    },
    iconContainer: {
      width: 60, // Fixed width
      height: 60, // Fixed height
      borderRadius: 30, // Half of width/height to make it round
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      marginBottom: 5
    },
    itemText: {
      fontSize: 16,
      fontWeight: '500'
    }
});