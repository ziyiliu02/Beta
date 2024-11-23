import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useHeaderHeight } from '@react-navigation/elements';
import ChannelEpisodesTabNavigation from '@/components/theatre/ChannelEpisodesTabNavigation'; 
import ChannelEpisodesList from '@/components/theatre/ChannelEpisodesList';
import ChannelActivities from '@/components/theatre/ChannelActivities';

const channelEpisodes = () => {
    const router = useRouter();
    const headerHeight = useHeaderHeight();

    return (
        <>
        <Stack.Screen options={{
            headerTransparent: true,
            headerTitle: "Channel",
            headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                    <View>
                        <FontAwesome name='angle-left' size={30} color={Colors.primaryColorBlack}/>
                    </View>
                </TouchableOpacity>
            ),
        }}/>
        <View style={[styles.container, { paddingTop: headerHeight }]}>
            <ChannelActivities/>
            <View style={styles.navigation}>
                <ChannelEpisodesTabNavigation/>
            </View>
            <View style={styles.list}>
                <ChannelEpisodesList/>
            </View>
        </View>
        </>
    )
}

export default channelEpisodes

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 30,
      padding: 20,
    },
    navigation: {
        flex: 1
    },
    list: {
        flex: 10
    }
  });