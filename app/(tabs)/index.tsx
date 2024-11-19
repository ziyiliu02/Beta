import { StyleSheet, Text, View, TouchableOpacity, Button, Modal } from "react-native";
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import SourcesModal from '@/components/theatre/SourcesModal';
import AskModal from "@/components/theatre/AskModal";

type Props = {}

const Page = (props: Props) => {
  const router = useRouter();
  const [isSourcesModalVisible, setIsSourcesModalVisible] = useState(false);
  const [isAskModalVisible, setIsAskModalVisible] = useState(false);

  const sources = [
    { id: 1, title: 'Title', timestamp: 'Timestamp' },
    { id: 2, title: 'Title', timestamp: 'Timestamp' },
  ];

  const questions = [
    { id: 1, title: 'Question' },
    { id: 2, title: 'Question' },
  ]

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
        <Button title="Sources" onPress={() => setIsSourcesModalVisible(true)} />
        <SourcesModal
          visible={isSourcesModalVisible}
          onClose={() => setIsSourcesModalVisible(false)}
          sources={sources}
        />
      </View>
      <View>
        <Button title="Ask" onPress={() => setIsAskModalVisible(true)} />
        <AskModal
          visible={isAskModalVisible}
          onClose={() => setIsAskModalVisible(false)}
          questions={questions}
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