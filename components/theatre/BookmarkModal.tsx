import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

interface Category {
  id: number;
  category: string;
  videos: string;
}

interface BookmarkModalProps {
    visible: boolean;
    onClose: () => void;
    categories: Category[];
  }

const BookmarkModal = ({ visible, onClose, categories }: BookmarkModalProps) => {
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

          {/* Add Section */}
          <View style={styles.addWrapper}>
            <Entypo name='plus' size={24} color={Colors.primaryColorBlack}/>
            <Text style={styles.addTxt}>Add New Category</Text>
          </View>

          <View style={styles.divider} />

          {/* Search Section */}
          <View style={styles.searchWrapper}>
            <View style={styles.searchBar}>
              <FontAwesome name='search' size={24} color={Colors.primaryColorBlack}/>
            </View>
          </View>

          {/* Categories Section */}
          <View style={styles.categoriesList}>
          {categories.map((category, index) => (
            <View key={category.id}>
              <View style={styles.categoryItem}>
                <View style={styles.categoryTxtWrapper}>
                  <FontAwesome name='circle-thin' size={18}/>
                  <View style={styles.categoryTxt}>
                    <Text style={styles.categoryTxtTitle}>{category.category}</Text>
                    <Text style={styles.categoryTxtVideos}>{category.videos} videos</Text>
                  </View>
                </View>
                <FontAwesome5 name='angle-right' size={18}/>
              </View>
            </View>
          ))}
          </View>

        </View>
      </View>
    </Modal>
  )
}

export default BookmarkModal

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
  addWrapper: {
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 10,
    marginLeft: 20
  },
  addTxt: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 2
  },
  divider: {
    height: 1,
    backgroundColor: Colors.primaryColorBlack,
    margin: 20
  },
  searchWrapper: {
    flexDirection: 'row',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.secondaryColorGrey,
    marginHorizontal: 20,
    marginVertical: 10
  },
  categoriesList: {
    padding: 16,
    marginTop: 20,
    marginBottom: 100
  },
  categoryItem: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  categoryTxtWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  categoryTxt: {
    marginLeft: 10,
  },
  categoryTxtTitle: {
    color: Colors.primaryColorBlack,
    fontWeight: '800'
  },
  categoryTxtVideos: {
    color: Colors.secondaryColorGrey
  }
});