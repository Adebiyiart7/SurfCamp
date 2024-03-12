import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Header from "../components/Header";
import useTheme from "../hooks/useTheme";

const Home = () => {
  const theme = useTheme();

  return (
    <Screen>
      <Header />
      <Text style={{ color: theme.colors.mediumText }}>Home</Text>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({});
