import { StyleSheet, Text, View, Modal, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

interface RatingModalProps {
    visible: boolean;
    onClose: () => void;
}

const RatingModal = ({ visible, onClose }:  RatingModalProps) => {
    const [rating, setRating] = useState(0);

    return (
        <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {/* Header Section */}
                    <View style={styles.header}>
                        <View style={styles.headerBorderContainer}>
                        <View style={styles.headerLine} />
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Entypo name='cross' size={24} color={Colors.primaryColorBlack}/>
                        </TouchableOpacity>
                        </View>
                    </View>
                    
                    {/* Rating Section */}
                    <View style={styles.ratingWrapper}>
                        <Text style={styles.ratingTitle}>Rate this</Text>
                        <View style={styles.ratingPopcornRow}>
                        {[1,2,3,4,5].map((index) => (
                            <TouchableOpacity 
                                key={index}
                                onPress={() => setRating(index)}
                            >
                                <MaterialCommunityIcons 
                                    name="popcorn" 
                                    size={32}
                                    color={index <= rating ? Colors.primaryColorBlack : Colors.secondaryColorLightGrey}
                                />
                            </TouchableOpacity>
                        ))}
                        </View>
                        <TouchableOpacity onPress={() => {}} style={styles.ratingBtn}>
                            <Text style={styles.ratingBtnTxt}>Rate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default RatingModal

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: '80%',
        paddingLeft: 20,
        paddingBottom: 50
    },
    header: {
        padding: 16,
    },
    headerBorderContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    headerLine: {
        height: 4,
        width: 50,
        backgroundColor: Colors.secondaryColorLightGrey,
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 8,
        zIndex: 1,
    },
    ratingWrapper: {
        alignItems: 'center'
    },
    ratingTitle: {
        fontSize: 16,
        fontWeight: '800',
        marginTop: 2
    },
    ratingPopcornRow: {
        flexDirection: 'row',
        gap: 8,
        marginVertical: 20,
    },
    ratingBtn: {
        backgroundColor: Colors.primaryColorBlack,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,
        width: '80%'
    },
    ratingBtnTxt: {
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    }
});