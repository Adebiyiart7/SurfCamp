import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import React, { ReactNode } from "react";
import useTheme from "../hooks/useTheme";
import Sizes from "../config/Sizes";

interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  color?: string;
}

const AppText = ({ children, style, fontSize, color }: Props) => {
  const { colors } = useTheme();

  return (
    <Text
      style={[
        styles.text,
        { color: color || colors.text, fontSize: fontSize || Sizes.base },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({ text: {} });
