import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import { CampList } from "../data/campList";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Sizes from "../config/Sizes";
import useTheme from "../hooks/useTheme";

interface Props {
  camp: CampList;
}

const CampCard = ({ camp }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ImageBackground source={camp.image} style={styles.image}>
        <View style={styles.imageContent}>
          <AppText color={colors.white} style={styles.title}>
            {camp.country.name}
          </AppText>
          <View style={styles.subTitle}>
            <MaterialCommunityIcons
              size={Sizes.base}
              color={colors.white}
              name="airplane"
            />
            <AppText color={colors.white} fontSize={Sizes.sm}>
              {camp.flightTimeInHrs} hours
            </AppText>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CampCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  image: {
    width: 400 / 3,
    height: 650 / 3,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 10,
  },
  imageContent: {
    flex: 1,
    position: "absolute",
    bottom: Sizes.base,
    left: Sizes.base,
  },
  subTitle: {
    gap: 4,
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
  },
});
