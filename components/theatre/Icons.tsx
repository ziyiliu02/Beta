import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons, FontAwesome5, Feather, Octicons } from '@expo/vector-icons';
import RatingModal from './RatingModal';
import JoinModal from './JoinModal';
import BookmarkModal from './BookmarkModal';

const Icons = ({ isRatingModalVisible, setIsRatingModalVisible, isJoinModalVisible, setIsJoinModalVisible, isBookmarkModalVisible, setIsBookmarkModalVisible, categories }) => {
    return (
        <View style={styles.container}>

            {/* Left */}
            <View style={styles.iconWrapper}>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={() => setIsRatingModalVisible(true)} style={styles.icon}>
                        <MaterialCommunityIcons name='popcorn' size={18} color={Colors.primaryColorBlack}/>
                        <Text style={styles.iconTxt}>Rating</Text>
                    </TouchableOpacity>
                    <RatingModal
                        visible={isRatingModalVisible}
                        onClose={() => setIsRatingModalVisible(false)}
                    />
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={() => setIsJoinModalVisible(true)} style={styles.icon}>
                        <FontAwesome5 name='wine-glass-alt' size={18} color={Colors.primaryColorBlack}/>
                        <Text style={styles.iconTxt}>Join</Text>
                    </TouchableOpacity>
                    <JoinModal
                        visible={isJoinModalVisible}
                        onClose={() => setIsJoinModalVisible(false)}
                    />
                </View>
            </View>

            {/* Right */}
            <View style={styles.iconWrapper}>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={() => setIsBookmarkModalVisible(true)} style={styles.icon}>
                        <Feather name='bookmark' size={18} color={Colors.primaryColorBlack}/>
                        <Text style={styles.iconTxt}>Bookmark</Text>
                    </TouchableOpacity>
                    <BookmarkModal
                        visible={isBookmarkModalVisible}
                        onClose={() => setIsBookmarkModalVisible(false)}
                        categories={categories}
                    />
                </View>
                <View style={styles.icon}>
                    <Octicons name='megaphone' size={18} color={Colors.primaryColorBlack}/>
                    <Text style={styles.iconTxt}>Share</Text>
                </View>
            </View>

        </View>
    )
}

export default Icons

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    iconWrapper: {
        flexDirection: 'row',
        gap: 10
    },
    icon: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconTxt: {
        color: Colors.primaryColorBlack,
        fontSize: 12
    }
});