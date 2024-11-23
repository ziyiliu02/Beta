import { StyleSheet, View, Text, FlatList } from 'react-native'
import React from 'react'
import { Entypo, FontAwesome5, Octicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

interface ActivityItem {
  id: string;
  name: string;
  icon: string;
  iconType: keyof typeof iconComponents;
  backgroundColor: string;
  iconColor: string;
}

const activitiesData: ActivityItem[] = [
  { id: '1', name: 'Workshops', icon: 'laptop', iconType: 'Entypo', backgroundColor: Colors.primaryColorRed, iconColor: 'white' },
  { id: '2', name: 'Socials', icon: 'glass-cheers', iconType: 'FontAwesome5', backgroundColor: Colors.primaryColorYellow, iconColor: 'white' },
  { id: '3', name: 'Conferences', icon: 'microphone', iconType: 'FontAwesome5', backgroundColor: '#3220FF', iconColor: 'white' },
  { id: '4', name: 'Competitions', icon: 'person', iconType: 'Octicons', backgroundColor: '#0E9433', iconColor: 'white' }
]

const iconComponents = {
  Entypo,
  FontAwesome5,
  Octicons,
};

const ChannelActivities = () => {
  const renderItem = ({ item }: { item: ActivityItem }) => {
    const IconComponent = iconComponents[item.iconType];
  
    if (!IconComponent) {
      console.error(`Icon type ${item.iconType} is not supported`);
      return null;
    }
  
    return (
      <View style={styles.itemContainer}>
        <View style={[styles.iconContainer, { backgroundColor: item.backgroundColor }]}>
          <IconComponent name={item.icon} size={20} color={item.iconColor} />
        </View>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>Activities</Text>
        <FontAwesome5 name='angle-right' size={20}/>
      </View>
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

export default ChannelActivities

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 5,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    width: 100,
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
    fontWeight: '500',
  }
});