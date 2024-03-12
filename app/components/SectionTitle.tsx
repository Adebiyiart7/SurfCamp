import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import AppText from "./AppText";
import Sizes from "../config/Sizes";
import useTheme from "../hooks/useTheme";

interface Props {
  title: string;
  subTitle?: string;
  Right?: ReactNode;
}

const SectionTitle = ({ title, subTitle, Right }: Props) => {
  const { colors } = useTheme();

  return (
    <View>
      <AppText style={styles.title}>{title}</AppText>
      <View style={styles.bottom}>
        <AppText style={[styles.subTitle, { color: colors.mediumText }]}>
          {subTitle}
        </AppText>
        <View>{Right}</View>
      </View>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  subTitle: {},
  title: {
    fontSize: Sizes.xl,
    fontWeight: "600",
  },
});
