import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';

type Tab = {
    id: string;
    label: string;
};

const tabs: Tab[] = [
    { id: 'episodes', label: '# Episodes' },
    { id: 'activities', label: '# Activities' },
    { id: 'community', label: 'Community' }
]

const ChannelEpisodesTabNavigation = () => {
    const [activeTab, setActiveTab] = useState('episodes');

    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab.id}
                        onPress={() => setActiveTab(tab.id)}
                        style={[
                            styles.tab,
                            activeTab === tab.id && styles.activeTab
                        ]}
                    >
                        <Text
                        style={[
                            styles.tabText,
                            activeTab === tab.id && styles.activeTabText
                        ]}
                        >
                            {tab.label}
                        </Text>
                        {activeTab === tab.id && <View style={styles.underline} />}
                    </TouchableOpacity>
                ))}
            </View>

            {/* Content container */}
            <View style={styles.content}>
                {activeTab === 'episodes' && (
                    <View>
                        {/* Episode items would go here */}
                    </View>
                )}
                {activeTab === 'activities' && (
                    <View>
                        {/* Activities content would go here */}
                    </View>
                )}
                {activeTab === 'community' && (
                    <View>
                        {/* Community content would go here */}
                    </View>
                )}
            </View>
        </View>
    )
}

export default ChannelEpisodesTabNavigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabsContainer: {
        flexDirection: 'row',
        // borderBottomWidth: 1,
        // borderBottomColor: Colors.primaryColorBlack,
    },
    tab: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        position: 'relative',
    },
    activeTab: {
        backgroundColor: 'transparent',
    },
    tabText: {
        color: Colors.secondaryColorGrey,
        fontSize: 16,
    },
    activeTabText: {
        color: Colors.primaryColorBlack,
        fontWeight: '600',
    },
    underline: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 4,
        backgroundColor: Colors.primaryColorBlack,
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
});