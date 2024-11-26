import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';

const Pagination = () => {
  return (
    <View style={styles.container}>
        <View style={styles.activePaginationDot}/>
        {[...Array(4)].map((_, i) => (
            <View key={i} style={styles.paginationDot}/>
        ))}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15 
    },
    activePaginationDot: {
        width: 40,
        height: 8,
        backgroundColor: Colors.primaryColorBlack,
        borderRadius: 4
    },
    paginationDot: {
        width: 8,
        height: 8,
        backgroundColor: Colors.secondaryColorLightGrey,
        borderRadius: 4
    }
});