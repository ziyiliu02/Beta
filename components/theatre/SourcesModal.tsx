import { StyleSheet, Text, View, TouchableOpacity, Modal, Dimensions, Image } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { Entypo } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface Source {
  id: number;
  title: string;
  timestamp: string;
}

interface SourcesModalProps {
  visible: boolean;
  onClose: () => void;
  sources: Source[];
}

const SourcesModal = ({ visible, onClose, sources}: SourcesModalProps) => {
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
            <View style={styles.headerContent}>
              <Text style={styles.headerTitle}># Sources</Text>
            </View>
          </View>

          {/* Sources */}
          <View style={styles.sourcesList}>
          {sources.map((source, index) => (
            <View key={source.id}>
              <View style={styles.sourceItem}>
                <View style={styles.sourcePlaceholder} />
                <View style={styles.sourceInfo}>
                  <Text style={styles.sourceTitle}>
                    {`${index + 1}. ${source.title}`}
                  </Text>
                  <Text style={styles.sourceTimestamp}>{source.timestamp}</Text>
                  <View style={styles.sources}>
                    <View style={styles.sourcesIcon} />
                    <Text style={styles.sourcesTxt}>Source</Text>
                  </View>
                </View>
              </View>
              <View style={styles.separator} />
            </View>
          ))}
          </View>
        </View>
      </View> 
    </Modal>
  )
}

export default SourcesModal

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
    paddingLeft: 20
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
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 12,
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  sourcesList: {
    padding: 16,
  },
  sourceItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  sourcePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: Colors.secondaryColorLightGrey,
    borderRadius: 8,
    marginRight: 12,
  },
  sourceInfo: {
    flex: 1,
  },
  sourceTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  sourceTimestamp: {
    fontSize: 14,
    color: Colors.secondaryColorLightGrey,
    marginBottom: 8,
  },
  sources: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  sourcesIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.secondaryColorLightGrey,
    marginRight: 8,
  },
  sourcesTxt: {
    fontSize: 14,
    color: Colors.primaryColorBlack,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.secondaryColorLightGrey,
    marginBottom: 16,
  },
})