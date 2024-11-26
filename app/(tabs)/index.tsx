import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView } from "react-native";
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react'
import { StatusBar } from "expo-status-bar";
import Colors from '@/constants/Colors';
import Episode from "@/components/theatre/Episode";
import Pagination from "@/components/theatre/Pagination";
import Icons from "@/components/theatre/Icons";

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
    <>
    <Stack.Screen options={{
      headerTransparent: true,
      headerTitle: "",
      headerRight: () => (
        <TouchableOpacity onPress={() => router.push("/theatre/notification")} style={styles.notificationWrapper}>
          <Text style={styles.notification}>4</Text>
        </TouchableOpacity>
      )
    }}/>
      <View>
        <StatusBar style="light"/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Episode
            isSourcesModalVisible={isSourcesModalVisible}
            setIsSourcesModalVisible={setIsSourcesModalVisible}
            sources={sources}
            isAskModalVisible={isAskModalVisible}
            setIsAskModalVisible={setIsAskModalVisible}
            questions={questions}
            isRewriteModalVisible={isRewriteModalVisible}
            setIsRewriteModalVisible={setIsRewriteModalVisible}
            models={models}
          />
          <Pagination/>
          <Icons
            isRatingModalVisible={isRatingModalVisible}
            setIsRatingModalVisible={setIsRatingModalVisible}
            isJoinModalVisible={isJoinModalVisible}
            setIsJoinModalVisible={setIsJoinModalVisible}
            isBookmarkModalVisible={isBookmarkModalVisible}
            setIsBookmarkModalVisible={setIsBookmarkModalVisible}
            categories={categories}
          />
        </ScrollView>
      </View>
    </>
  )
}

export default Page

const styles = StyleSheet.create({
  notificationWrapper: {
    backgroundColor: Colors.primaryColorRed,
    width: 30,
    height: 30,
    borderRadius: 15,
    padding: 4,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notification: {
    color: 'white',
    fontWeight: '600'
  } 
})