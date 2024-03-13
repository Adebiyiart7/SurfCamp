import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import Sizes from "../config/Sizes";

interface Props {
  Left?: ReactNode;
  Right?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Header = ({ Left, Right, style }: Props) => {
  return (
    <View style={[styles.header, style]}>
      <View style={styles.left}>{Left}</View>
      <View style={styles.right}>{Right}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: Sizes.wall,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {},
  right: {},
});
