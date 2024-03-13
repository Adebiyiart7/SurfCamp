import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import Sizes from "../config/Sizes";

interface Props {
  Left?: ReactNode;
  Right?: ReactNode;
}

const Header = ({ Left, Right }: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>{Left}</View>
      <View style={styles.right}>{Right}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: Sizes.wall,
    paddingBottom: Sizes.xs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {},
  right: {},
});
