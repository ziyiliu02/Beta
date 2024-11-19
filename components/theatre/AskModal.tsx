import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface Question {
  id: number;
  question: string;
}
  
interface AskModalProps {
  visible: boolean;
  onClose: () => void;
  questions: Question[];
}

const AskModal = ({ visible, onClose, questions}: AskModalProps) => {
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

              {/* Searchbar Section */}
              <View style={styles.askSectionWrapper}>
                <View style={styles.askBar}>
                  <TextInput placeholder="Ask anything related to this topic.."/>
                </View>
                <View style={styles.icons}>
                  <Feather name='mic' size={18} style={{ marginRight: 5 }}/>
                  <FontAwesome5 name='history' size={18} style={{ marginRight: 5 }}/>
                </View>
              </View>

              {/* Questions Section */}
              <Text style={styles.title}># Related</Text>
              <View style={styles.questionsList}>
              {questions.map((question, index) => (
                <View key={question.id}>
                  <View style={styles.questionItem}>
                    <Text style={styles.questionTitle}>
                      {`${index + 1}. ${question.title}`}
                    </Text>
                    <FontAwesome5 name='angle-right' size={18}/>
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

export default AskModal

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
    askSectionWrapper: {
      flexDirection: 'row',
      marginVertical: 20
    },
    askBar: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.secondaryColorGrey
    },
    icons: {
      flexDirection: 'row',
      margin: 20
    },
    title: {
      fontSize: 16,
      fontWeight: '800',
      marginTop: 20,
      marginLeft: 15,
      marginBottom: 10
    },
    questionsList: {
      padding: 16,
      marginBottom: 60,
      marginRight: 15
    },
    questionItem: {
      flexDirection: 'row',
      marginBottom: 16,
      justifyContent: 'space-between'
    },
    questionTitle: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 4,
    },
    separator: {
      height: 1,
      backgroundColor: Colors.secondaryColorLightGrey,
      marginBottom: 16,
    },
})