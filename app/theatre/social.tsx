import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const social = () => {
  const router = useRouter();
  const headerHeight = useHeaderHeight();

  return (
    <>
    <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: "Social",
        headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
                <View>
                    <FontAwesome name='angle-left' size={30} color={Colors.primaryColorBlack}/>
                </View>
            </TouchableOpacity>
        )
    }}/>
      <View style={[styles.container, { paddingTop: headerHeight }]}>

        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <FontAwesome5 name='wine-glass-alt' size={30} color={Colors.primaryColorBlack}/>
            <Text style={styles.headerLeftTxt}>50 people joined</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerRightTxt}>Latest</Text>
            <FontAwesome name='angle-down' size={25} color={Colors.primaryColorBlack}/>
          </View>
        </View>

        {/* Conversation Section */}
        <View style={styles.conversationContainer}>
          <View style={styles.conversationHeader}>
            <View style={styles.profileImagePlaceholder} />
            <Text style={styles.conversationName}>Name</Text>
          </View>
          <Text style={styles.conversationText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
          <View style={styles.conversationFooter}>
            <Text style={styles.conversationFooterTxt}>27 Nov 2024 . 4:29pm . Reply</Text>
            <View style={styles.conversationIcon}>
              <Text style={styles.conversationIconTxt}>2</Text>
              <FontAwesome5 name='wine-glass-alt' size={15} color={Colors.primaryColorBlack}/>
            </View>
          </View> 
        </View>

      </View>
    </>

  )
}

export default social

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    padding: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftTxt: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 5
  }, 
  headerRightTxt: {
    fontSize: 16,
    fontWeight: '600',
    paddingRight: 5
  },
  conversationContainer: {
    borderWidth: 1,
    borderColor: Colors.secondaryColorLightGrey,
    borderRadius: 5,
    padding: 15,
    marginVertical: 10
  },
  conversationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImagePlaceholder: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.secondaryColorLightGrey,
    marginRight: 10,
  },
  conversationName: {
    fontSize: 16,
    fontWeight: '600',
  },
  conversationText: {
    marginVertical: 10,
  },
  conversationFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  conversationFooterTxt: {
    fontSize: 12,
    color: Colors.secondaryColorGrey
  },
  conversationIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  conversationIconTxt: {
    marginRight: 5
  }
});