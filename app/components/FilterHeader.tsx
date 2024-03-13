import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import Sizes from "../config/Sizes";
import useTheme from "../hooks/useTheme";

const FilterHeader = () => {
  const { colors } = useTheme();

  return (
    <Header
      Left={
        <Pressable style={styles.pressable}>
          <Ionicons name="search" size={Sizes.md} style={{ marginTop: 1 }} />
          <AppText style={styles.text}>Search</AppText>
        </Pressable>
      }
      Right={
        <Pressable style={styles.pressable}>
          <AppText
            style={styles.text}
            fontSize={Sizes.sm}
            color={colors.mediumText}
          >
            Filter
          </AppText>
          <MaterialCommunityIcons
            name="tune-vertical-variant"
            color={colors.mediumText}
            size={Sizes.md}
            style={{ marginTop: 1 }}
          />
        </Pressable>
      }
    />
  );
};

export default FilterHeader;

const styles = StyleSheet.create({
  pressable: {
    gap: Sizes.xs,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
  },
});
