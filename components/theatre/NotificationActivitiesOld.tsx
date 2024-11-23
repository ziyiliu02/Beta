import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';

const NotificationActivitiesOld = () => {
  return (
    <View style={styles.container}>
        <View>
            <View style={styles.iconContainer}>
                <FontAwesome5 name='glass-cheers' size={15} color='white' />
            </View>
            <Text style={styles.itemText}>Social</Text>
        </View>
        <View style={styles.textWrapper}>
            <View style={styles.header}>
                <Text style={styles.titleText}>Title</Text>
                <Text style={styles.dateText}>23.11.24</Text>
            </View>
            <Text style={styles.detailsText}>Location . Date & Time</Text>
        </View>
    </View>
  )
}

export default NotificationActivitiesOld

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    iconContainer: {
        width: 40, // Fixed width
        height: 40, // Fixed height
        borderRadius: 20, // Half of width/height to make it round
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 5,
        backgroundColor: Colors.primaryColorYellow
    },
    itemText: {
        fontWeight: '600'
    },
    textWrapper: {
        flex: 1,
        marginLeft: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    titleText: {
        fontWeight: '600',
    },
    dateText: {
        color: Colors.secondaryColorGrey,
    },
    detailsText: {
        color: Colors.secondaryColorGrey,
    }
});