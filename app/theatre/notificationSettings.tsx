import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useHeaderHeight } from '@react-navigation/elements';

const notificationSettings = () => {
  const router = useRouter();
  const headerHeight = useHeaderHeight();

  return (
    <>
    <Stack.Screen options={{
      headerTransparent: true,
      headerTitle: "Settings",
      headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()}>
            <View>
                <FontAwesome name='angle-left' size={30} color={Colors.primaryColorBlack}/>
            </View>
        </TouchableOpacity>
    ),
    }}/>
    <View style={[styles.container, { paddingTop: headerHeight }]}>
      <TouchableOpacity onPress={() => {}} style={styles.btn}>
        <Text style={styles.btnTxt}>Enable Notifications</Text>
      </TouchableOpacity>
      <Text>Push notifications are disabled for Cherrypick</Text>
    </View>
    </>
  )
}

export default notificationSettings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    padding: 20
  },
  btn: {
    backgroundColor: Colors.primaryColorRed,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  btnTxt: {
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  }
});