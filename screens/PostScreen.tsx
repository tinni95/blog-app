import { useQuery } from "@apollo/client";
import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  RefreshControl,
  InteractionManager,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { GET_POST } from "../apollo/query";
import { Bold, Regular } from "../components/StyledText";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Comment } from "../types";
import CommentCard from "../components/CommentCard";
import CommentTextInput from "../components/CommentTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostScreen: React.FC<any> = (props) => {
  const { id } = props.route.params;
  const { data: { getPost = {} } = {}, refetch, loading } = useQuery(GET_POST, {
    variables: { id },
    onCompleted: (data) => console.log(data),
  });

  const _refetch = useCallback(() => {
    const task = InteractionManager.runAfterInteractions(async () => {
      if (refetch) await refetch();
    });
    return () => task.cancel();
  }, [refetch]);

  const listHeader = () => {
    return (
      <>
        <View style={styles.mainContainer}>
          <Bold style={{ fontSize: 50 }}>{getPost.title}</Bold>
          <Bold style={styles.small}>by {getPost.author.username}</Bold>
          <Regular style={styles.body}>{getPost.content}</Regular>
        </View>
        <View style={styles.indicatorBar}>
          <View style={styles.indicator}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="heart-outlined" size={24} color={Colors.PEACH} />
              <Bold
                style={[styles.small, { color: Colors.WHITE, marginLeft: 3 }]}
              >
                {getPost.likes.length} Likes
              </Bold>
            </TouchableOpacity>
          </View>
          <View style={styles.indicator}>
            <EvilIcons name="comment" size={24} color={Colors.PEACH} />
            <Bold style={[styles.small, { color: Colors.WHITE }]}>
              {getPost.comments.length} Comments
            </Bold>
          </View>
        </View>
      </>
    );
  };

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <CommentTextInput id={id} />
      <View style={{ flex: 1, paddingBottom: 80 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={listHeader()}
          contentContainerStyle={{
            backgroundColor: Colors.SEMI_WHITE,
          }}
          data={getPost.comments}
          keyExtractor={(item: Comment) => item.id}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={() => _refetch()} />
          }
          renderItem={({ item }: { item: Comment }) => (
            <CommentCard comment={item} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.WHITE },
  mainContainer: { padding: 10, backgroundColor: Colors.WHITE },
  small: { fontSize: 12 },
  body: { fontSize: 14, marginTop: 30, marginBottom: 20 },
  indicatorBar: {
    backgroundColor: Colors.BLUE,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
  },
});
export default PostScreen;
