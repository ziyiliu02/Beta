import { StyleSheet, View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';

const ChannelEpisodesList = () => {
    const [episodes, setEpisodes] = useState([
        { id: '1', name: 'Title 1', episode: 'E1', sources: '4' },
        { id: '2', name: 'Title 2', episode: 'E2', sources: '5' },
    ]);

    const renderItem = ({ item }) => (
        <View style={styles.episodeItem}>
            <View style={styles.thumbnail}/>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>
                    {item.episode} | {item.name}
                </Text>
                <Text style={styles.subtitleText}>
                    Timestamp · {item.sources} Sources
                </Text>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={episodes}
                renderItem={renderItem}
            />
        </View>
    )
}

export default ChannelEpisodesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    episodeItem: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center'
    },
    thumbnail: {
        width: 70,
        height: 70,
        backgroundColor: Colors.secondaryColorLightGrey,
        borderRadius: 4,
    },
    textContainer: {
        marginLeft: 16,
        flex: 1,
    },
    titleText: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    subtitleText: {
        fontSize: 14,
        color: Colors.secondaryColorLightGrey,
    },
});