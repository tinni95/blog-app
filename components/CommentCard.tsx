import React, { useEffect, useRef, useState, TextInput } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Colors from "../constants/Colors";
import { Comment } from "../types";
import { Bold, Regular } from "./StyledText";
import moment from "moment";
import LikeButton from "./LikeButton";
import { useQuery } from "@apollo/client";
import { LOCALUSER } from "../apollo/query";
import { AntDesign } from "@expo/vector-icons";

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = (props) => {
  const { comment } = props;
  const { data: { currentUser = {} } = {}, loading } = useQuery(LOCALUSER);

  const [edit, setEdit] = useState(false);

  const editTextInputRef = useRef();

  useEffect(() => {}, [edit]);

  if (loading) return <ActivityIndicator />;
  return (
    <View style={styles.container}>
      <Text>
        <Bold style={styles.small}>{comment.author.username} </Bold>
        <Bold style={styles.smallGrey}>
          {moment(comment.createdAt).fromNow()}
        </Bold>
        {comment.author.id === currentUser.id && (
          <TouchableOpacity
            style={{ marginLeft: 15, flexDirection: "row" }}
            onPress={() => {}}
          >
            <AntDesign name="edit" size={18} color={Colors.BLUE} />
            <Bold style={{ marginLeft: 5, color: Colors.BLUE, fontSize: 14 }}>
              Edit
            </Bold>
          </TouchableOpacity>
        )}
      </Text>
      {!edit ? (
        <Regular>{comment.content}</Regular>
      ) : (
        <>
          <TextInput value={comment.content} ref={editTextInputRef} />
          <TouchableOpacity>
            <Bold>CONFERMA</Bold>
          </TouchableOpacity>
        </>
      )}
      <View style={{ height: 5 }} />
      <LikeButton
        commentId={comment.id}
        likes={comment.likes}
        style={{ color: Colors.BLUE }}
      />
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
