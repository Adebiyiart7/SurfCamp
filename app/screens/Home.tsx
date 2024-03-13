import React from "react";
import { Pressable, FlatList, StyleSheet, View } from "react-native";
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
import FilterBottomSheet from "../components/FilterBottomSheet";

const Home = () => {
  const { colors } = useTheme();

  return (
    <Screen>
      <FilterBottomSheet />
      <Header
        style={{ paddingBottom: Sizes.xs }}
        Left={
          <Pressable>
            <MaterialCommunityIcons name="menu" color={colors.text} size={28} />
          </Pressable>
        }
        Right={<Avatar />}
      />
      <FlatList
        ListFooterComponent={<View style={{ height: 100 }} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <SectionTitle
              style={{ marginHorizontal: Sizes.wall }}
              title="Surf Camps"
              subTitle="Best surf destination for you"
              Right={<SeeAll />}
            />
            <CampList />
            <SectionTitle
              style={{ marginTop: Sizes.wall, marginHorizontal: Sizes.wall }}
              title="Trending"
              subTitle="High season, everyone is here!"
              Right={<SeeAll />}
            />
          </>
        }
        data={campListTrending}
        renderItem={({ item }) => <CampCardTrending camp={item} />}
        contentContainerStyle={{ gap: Sizes.md }}
      />
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  wall: {
    paddingHorizontal: Sizes.wall,
  },
});
