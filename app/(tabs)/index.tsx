import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Theatre</Text>
      <TouchableOpacity onPress={() => router.push("/theatre/notification")}>
          <Text>Notifications</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})