import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router';
import { FontAwesome, Feather } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useHeaderHeight } from '@react-navigation/elements';
import NotificationActivities from '@/components/theatre/NotificationActivities';
import NotificationActivitiesOld from '@/components/theatre/NotificationActivitiesOld';

const notification = () => {
    const router = useRouter();
    const headerHeight = useHeaderHeight();

    return (
        <>
        <Stack.Screen options={{
            headerTransparent: true,
            headerTitle: "Notifications",
            headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                    <View>
                        <FontAwesome name='angle-left' size={30} color={Colors.primaryColorBlack}/>
                    </View>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => router.push("/theatre/notificationSettings")}>
                    <View>
                        <Feather name='settings' size={25} color={Colors.primaryColorBlack}/>
                    </View>
                </TouchableOpacity>
            )
        }}/>
        <View style={[styles.container, { paddingTop: headerHeight }]}>
            <NotificationActivities/>

            <Text style={styles.headingTxt}>New</Text>
            <View style={styles.line}/>
            <Text style={styles.dateTxt}>15 Nov 2024</Text>
            
            <Text style={styles.headingTxt}>Old</Text>
            <View style={styles.line}/>
            <Text style={styles.dateTxt}>15 Nov 2024</Text>
            <NotificationActivitiesOld/>
        </View>
        </>
    )
}

export default notification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        padding: 20
    },
    headingTxt: {
        fontWeight: '600',
        color: Colors.primaryColorBlack,
        paddingTop: 20,
        paddingBottom: 2
    },
    dateTxt: {
        fontWeight: '600',
        color: Colors.primaryColorBlack,
        paddingTop: 5,
    },
    line: {
        height: 1,
        backgroundColor: Colors.primaryColorBlack
    }
});