import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { Entypo, FontAwesome } from '@expo/vector-icons';

interface Model {
    id: number;
    model: string;
    description: string;
}

interface RewriteModalProps {
    visible: boolean;
    onClose: () => void;
    models: Model[];
}

const RewriteModal = ({ visible, onClose, models}: RewriteModalProps) => {
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

                {/* Models Section */}
                <View style={styles.modelsWrapper}>
                    <View style={styles.modelsTitleWrapper}>
                        <FontAwesome name='refresh' size={24} color={Colors.primaryColorBlack}/>
                        <Text style={styles.modelsTitle}>Rewrite</Text>
                    </View>
                    <Text style={styles.modelsSubtitle}>Choose a different model to rewrite the answer</Text>

                    <View style={styles.modalsList}>
                    <Text style={styles.modelsTitle}>Anthropic</Text>
                    {models.map((model, index) => (
                        <View key={model.id} style={styles.modelsContent}>
                            <Text>{model.model}</Text>
                            <Text style={styles.modelsDescription}>{model.description}</Text>
                        </View>
                    ))}
                    <View style={styles.separator} />
                    </View>
                </View>

            </View>
        </View>
    </Modal>
  )
}

export default RewriteModal

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
    modelsWrapper: {
        width: '100%',
    },
    modelsTitleWrapper: {
        flexDirection: 'row',
        alignContent: 'center',
        marginBottom: 10,
        marginLeft: 20
    },
    modelsTitle: {
        fontSize: 16,
        fontWeight: '800',
        marginLeft: 15,
        marginTop: 2
    },
    modelsSubtitle: {
        fontSize: 14,
        color: Colors.secondaryColorGrey,
        marginLeft: 15
    },
    modalsList: {
        marginVertical: 20
    },
    modelsContent: {
        margin: 15
    },
    modelsDescription: {
        color: Colors.secondaryColorGrey
    },
    separator: {
        height: 1,
        backgroundColor: Colors.secondaryColorLightGrey,
        margin: 10,
        marginRight: 40
    },
});