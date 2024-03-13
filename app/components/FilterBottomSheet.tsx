import { Modal, Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import useTheme from "../hooks/useTheme";
import FilterHeader from "./FilterHeader";
import Divider from "./Divider";

const FilterBottomSheet = () => {
  const [visible, setVisible] = useState(true);
  const { colors } = useTheme();

  return (
    <Pressable style={[styles.modal, { height: 52 }]}>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.background2, height: 52 },
        ]}
      >
        <FilterHeader />
        <Divider />
      </View>
    </Pressable>
  );
};

export default FilterBottomSheet;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    elevation: 10,
  },
  modal: {
    zIndex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
