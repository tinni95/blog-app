import moment from "moment";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { Post } from "../types";
import { Bold, Medium, Regular } from "./StyledText";

interface PostCardProps {
  post: Post;
  onPress: any;
}

export function PostCard(props: PostCardProps) {
  const { post, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>
        <Medium style={styles.name}>{post.author.username}</Medium>
        <Medium style={styles.when}>{moment(post.createdAt).fromNow()}</Medium>
      </Text>
      <Bold style={{ fontSize: 25 }}>{post.title}</Bold>
      <Regular style={{ fontSize: 25 }}>{post.content}</Regular>
      <View style={styles.footer}>
        <Medium>{post.likes.length} Likes</Medium>
        <Medium>{post.comments.length} Comments</Medium>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  name: {
    color: Colors.BLUE,
  },
  when: {
    color: Colors.BLUE_66,
  },
  footer: {
    alignSelf: "flex-end",
    justifyContent: "space-between",
  },
});
