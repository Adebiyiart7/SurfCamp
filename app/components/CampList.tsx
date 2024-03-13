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
      renderItem={({ item, index }) => (
        <View
          style={{
            marginLeft: index === 0 ? Sizes.wall : 4,
            marginRight: index === campList.length - 1 ? Sizes.wall : 4,
          }}
        >
          <CampCard camp={item} />
        </View>
      )}
      style={styles.list}
    />
  );
};

export default CampList;

const styles = StyleSheet.create({
  list: {},
});
