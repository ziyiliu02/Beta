import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native'
import React from 'react';
import Colors from '@/constants/Colors';
import { Entypo, FontAwesome5, Feather } from '@expo/vector-icons';

interface JoinModalProps {
    visible: boolean;
    onClose: () => void;
}

const JoinModal = ({ visible, onClose }: JoinModalProps) => {

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

                    {/* Body Section */}
                    <View>
                        <View style={styles.titleWrapper}>
                            <FontAwesome5 name='glass-martini-alt' size={24} color={Colors.primaryColorBlack} style={styles.titleIcon}/>
                            <Text style={styles.titleTxt}>Join the conversation</Text>
                        </View>
                        <View style={styles.textboxWrapper}>  
                            <View style={styles.textbox}>
                                <TextInput 
                                    placeholder="Is there anything you would like to add to the topic?" 
                                    style={styles.textInput}
                                    numberOfLines={2}
                                    multiline
                                />
                                <View style={styles.iconContainer}>
                                    <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
                                        <Feather name="mic" size={24} color={Colors.primaryColorBlack} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
                                        <Entypo name="plus" size={24} color={Colors.primaryColorBlack} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => {}} style={styles.btn}>
                                <Text style={styles.btnTxt}>Join</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default JoinModal

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
        maxHeight: '60%',
        paddingHorizontal: 20,
    },
    header: {
        padding: 16,
    },
    headerBorderContainer: {
        alignItems: 'center',
        marginBottom: 10,
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
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 5
    },
    titleIcon: {
        paddingRight: 10 
    },
    titleTxt: {
        fontSize: 16,
        fontWeight: '800',
        marginTop: 2,
        paddingRight: 20
    },
    textboxWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbox: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        height: '60%',
        width: '80%',
    },
    textInput: {
        fontSize: 16,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 8,
        right: 8,
        marginRight: 10,
        marginBottom: 15
    },
    iconButton: {
        marginLeft: 8,
    },
    btn: {
        backgroundColor: Colors.primaryColorBlack,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,
        width: '80%'
    },
    btnTxt: {
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    }
});