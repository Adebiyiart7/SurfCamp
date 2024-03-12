import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Header from "../components/Header";
import useTheme from "../hooks/useTheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Sizes from "../config/Sizes";

const Home = () => {
  const { colors } = useTheme();

  return (
    <Screen>
      <Header
        Left={
          <Pressable>
            <MaterialCommunityIcons name="menu" color={colors.text} size={32} />
          </Pressable>
        }
        Right={
          <Pressable>
            <Image
              source={require("../assets/image/joseph.jpg")}
              style={styles.avatar}
            />
          </Pressable>
        }
      />
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 6,
  },
});
