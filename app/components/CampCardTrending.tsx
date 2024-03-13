import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import { CampList } from "../data/campList";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Sizes from "../config/Sizes";
import useTheme from "../hooks/useTheme";
import { CampListTrending } from "../data/campListTrending";

interface Props {
  camp: CampListTrending;
}

const CampCardTrending = ({ camp }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ImageBackground source={camp.image} style={styles.image}>
        <View style={styles.imageContent}>
          <AppText color={colors.white} style={styles.title}>
            {camp.country.name}
          </AppText>
          <View style={styles.subTitle}>
            <AppText
              style={styles.subTitleText}
              color={colors.white}
              fontSize={Sizes.sm}
            >
              {camp.instructorCount} instructors
            </AppText>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CampCardTrending;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: Sizes.wall,
  },
  image: {
    position: "relative",
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    aspectRatio: 9 / 4,
    resizeMode: "cover",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
  },
  imageContent: {
    flex: 1,
    position: "absolute",
    bottom: Sizes.base,
    left: Sizes.base,
  },
  subTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  subTitleText: {
    textShadowColor: "#000",
    textShadowRadius: 2,
  },
  title: {
    fontWeight: "600",
    textShadowColor: "#000",
    textShadowRadius: 2,
  },
});
