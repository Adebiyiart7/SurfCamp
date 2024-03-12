import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

interface Props {
  children: ReactNode;
}

const Screen = ({ children }: Props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="auto" />
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight,
  },
});
