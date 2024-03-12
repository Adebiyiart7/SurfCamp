import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import React, { ReactNode } from "react";
import useTheme from "../hooks/useTheme";

interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

const AppText = ({ children, style }: Props) => {
  const { colors } = useTheme();

  return (
    <Text style={[styles.text, { color: colors.text }, style]}>{children}</Text>
  );
};

export default AppText;

const styles = StyleSheet.create({ text: {} });
