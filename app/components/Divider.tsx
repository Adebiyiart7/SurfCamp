import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useTheme from "../hooks/useTheme";

const Divider = () => {
  const { colors } = useTheme();

  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: colors.border }} />
  );
};

export default Divider;

const styles = StyleSheet.create({});
