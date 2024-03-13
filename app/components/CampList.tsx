import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import campList from "../data/campList";
import CampCard from "./CampCard";
import Sizes from "../config/Sizes";

const CampList = () => {
  return (
    <FlatList
      horizontal
      data={campList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CampCard camp={item} />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: Sizes.xs }}
      style={styles.list}
    />
  );
};

export default CampList;

const styles = StyleSheet.create({
  list: {
    marginTop: Sizes.wall,
  },
});
