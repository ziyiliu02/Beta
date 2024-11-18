import { StyleSheet, Text, View, TouchableOpacity, Button, Modal } from "react-native";
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import SourcesModal from '@/components/theatre/SourcesModal';

type Props = {}

const Page = (props: Props) => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const sources = [
    { id: 1, title: 'Title', timestamp: 'Timestamp' },
    { id: 2, title: 'Title', timestamp: 'Timestamp' },
  ];

  return (
    <View style={styles.container}>
      <Text>Theatre</Text>
      <TouchableOpacity onPress={() => router.push("/theatre/notification")}>
          <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/theatre/channelEpisodes")}>
          <Text>Channel</Text>
      </TouchableOpacity>
      <View>
        <Button title="Sources" onPress={() => setIsModalVisible(true)} />
        <SourcesModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          sources={sources}
        />
      </View>
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