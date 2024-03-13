import { SafeAreaView, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import useTheme from "../hooks/useTheme";

interface Props {
  children: ReactNode;
}

const Screen = ({ children }: Props) => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.colors.background }]}
    >
      <StatusBar style={"dark"} backgroundColor={theme.colors.background} />
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});
