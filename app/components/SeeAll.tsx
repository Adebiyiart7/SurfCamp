import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import useTheme from "../hooks/useTheme";

const ViewAll = () => {
  const { colors } = useTheme();

  return (
    <Pressable>
      <AppText style={[styles.text, { color: colors.primary }]}>
        See All
      </AppText>
    </Pressable>
  );
};

export default ViewAll;

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
  },
});
