import { StyleSheet, Text, View, TouchableOpacity, Button, Modal } from "react-native";
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import SourcesModal from '@/components/theatre/SourcesModal';
import AskModal from "@/components/theatre/AskModal";
import RewriteModal from "@/components/theatre/RewriteModal";
import RatingModal from "@/components/theatre/RatingModal";

type Props = {}

const Page = (props: Props) => {
  const router = useRouter();
  const [isSourcesModalVisible, setIsSourcesModalVisible] = useState(false);
  const [isAskModalVisible, setIsAskModalVisible] = useState(false);
  const [isRewriteModalVisible, setIsRewriteModalVisible] = useState(false);
  const [isRatingModalVisible, setIsRatingModalVisible] = useState(false);

  const sources = [
    { id: 1, title: 'Title', timestamp: 'Timestamp' },
    { id: 2, title: 'Title', timestamp: 'Timestamp' },
  ];

  const questions = [
    { id: 1, title: 'Question' },
    { id: 2, title: 'Question' },
  ]

  const models = [
    { id: 1, model: 'Claude 3.5 Sonnet', description: 'Latest fast model by Anthropic' },
    { id: 2, model: 'Claude 3 Opus', description: 'Latest advanced model by Anthropic' },
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

      {/* Sources */}
      <View>
        <Button title="Sources" onPress={() => setIsSourcesModalVisible(true)} />
        <SourcesModal
          visible={isSourcesModalVisible}
          onClose={() => setIsSourcesModalVisible(false)}
          sources={sources}
        />
      </View>

      {/* Ask */}
      <View>
        <Button title="Ask" onPress={() => setIsAskModalVisible(true)} />
        <AskModal
          visible={isAskModalVisible}
          onClose={() => setIsAskModalVisible(false)}
          questions={questions}
        />
      </View>

      {/* Rewrite */}
      <View>
        <Button title="Rewrite" onPress={() => setIsRewriteModalVisible(true)} />
        <RewriteModal
          visible={isRewriteModalVisible}
          onClose={() => setIsRewriteModalVisible(false)}
          models={models}
        />
      </View>

      {/* Rate */}
      <View>
        <Button title="Rate" onPress={() => setIsRatingModalVisible(true)} />
        <RatingModal
          visible={isRatingModalVisible}
          onClose={() => setIsRatingModalVisible(false)}
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