import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import { Comment } from "../types";
import { Bold, Regular } from "./StyledText";
import moment from "moment";
interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = (props) => {
  const { comment } = props;

  return (
    <View style={styles.container}>
      <Text>
        <Bold style={styles.small}>{comment.author.username} </Bold>
        <Bold style={styles.smallGrey}>
          {moment(comment.createdAt).fromNow()}
        </Bold>
      </Text>
      <Regular>{comment.content}</Regular>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    minHeight: 10,
  },
  small: {
    fontSize: 14,
  },
  smallGrey: {
    fontSize: 14,
    color: Colors.BLUE_66,
  },
});

export default CommentCard;
