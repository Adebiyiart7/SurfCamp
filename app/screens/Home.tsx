import React from "react";
import { Pressable, FlatList, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import Header from "../components/Header";
import useTheme from "../hooks/useTheme";
import Sizes from "../config/Sizes";
import SectionTitle from "../components/SectionTitle";
import SeeAll from "../components/SeeAll";
import Avatar from "../components/Avatar";
import CampList from "../components/CampList";
import CampCardTrending from "../components/CampCardTrending";
import campListTrending from "../data/campListTrending";

const Home = () => {
  const { colors } = useTheme();

  return (
    <Screen>
      <Header
        Left={
          <Pressable>
            <MaterialCommunityIcons name="menu" color={colors.text} size={32} />
          </Pressable>
        }
        Right={<Avatar />}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <SectionTitle
              title="Surf Camps"
              subTitle="Best surf destination for you"
              Right={<SeeAll />}
            />
            <CampList />
            <SectionTitle
              style={{ marginTop: Sizes.wall }}
              title="Trending"
              subTitle="High season, everyone is here!"
              Right={<SeeAll />}
            />
          </>
        }
        data={campListTrending}
        renderItem={({ item }) => <CampCardTrending camp={item} />}
        style={styles.container}
        contentContainerStyle={{ gap: Sizes.md }}
      />
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Sizes.wall,
  },
});
