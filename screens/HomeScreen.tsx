import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { POSTS_QUERY } from "../apollo/query";
import { PostCard } from "../components/PostCard";
import { Bold } from "../components/StyledText";
import { StyledTextInput } from "../components/StyledTextInput";
import Colors from "../constants/Colors";
import { Post } from "../types";

const HomeScreen: React.FC = () => {
  const { data, loading } = useQuery(POSTS_QUERY);

  return (
    <View style={styles.container}>
      <Bold>HOME</Bold>
      <StyledTextInput
        style={{ marginTop: 10 }}
        placeholderTextColor={Colors.WHITE}
        placeholder={"Cerca post"}
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        data.posts.map((post: Post) => (
          <PostCard post={post} onPress={() => {}} />
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SEMI_WHITE,
    padding: 5,
  },
});

export default HomeScreen;
