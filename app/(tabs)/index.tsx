import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import SourcesModal from '@/components/theatre/SourcesModal';
import AskModal from "@/components/theatre/AskModal";
import RewriteModal from "@/components/theatre/RewriteModal";
import RatingModal from "@/components/theatre/RatingModal";
import JoinModal from "@/components/theatre/JoinModal";
import BookmarkModal from "@/components/theatre/BookmarkModal";

type Props = {}

const Page = (props: Props) => {
  const router = useRouter();
  const [isSourcesModalVisible, setIsSourcesModalVisible] = useState(false);
  const [isAskModalVisible, setIsAskModalVisible] = useState(false);
  const [isRewriteModalVisible, setIsRewriteModalVisible] = useState(false);
  const [isRatingModalVisible, setIsRatingModalVisible] = useState(false);
  const [isJoinModalVisible, setIsJoinModalVisible] = useState(false);
  const [isBookmarkModalVisible, setIsBookmarkModalVisible] = useState(false);

  const sources = [
    { id: 1, title: 'Title', timestamp: 'Timestamp' },
    { id: 2, title: 'Title', timestamp: 'Timestamp' },
  ];

  const questions = [
    { id: 1, title: 'Question' },
    { id: 2, title: 'Question' },
  ];

  const models = [
    { id: 1, model: 'Claude 3.5 Sonnet', description: 'Latest fast model by Anthropic' },
    { id: 2, model: 'Claude 3 Opus', description: 'Latest advanced model by Anthropic' },
  ];

  const categories = [
    { id: 1, category: 'Ideas', videos: '10' },
    { id: 2, category: 'Replies', videos: '20' },
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

      {/* Join */}
      <View>
        <Button title="Join" onPress={() => setIsJoinModalVisible(true)} />
        <JoinModal
          visible={isJoinModalVisible}
          onClose={() => setIsJoinModalVisible(false)}
        />
      </View>

      {/* Bookmark */}
      <View>
        <Button title="Bookmark" onPress={() => setIsBookmarkModalVisible(true)} />
        <BookmarkModal
          visible={isBookmarkModalVisible}
          onClose={() => setIsBookmarkModalVisible(false)}
          categories={categories}
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