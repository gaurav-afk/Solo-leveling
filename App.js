import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TopStatus from "./components/status";
import Level from "./components/statusInfo";
import Points from "./components/points";
import DailyTaskButton from "./components/dailyTaskButton";
import Warning from "./components/warning";
import Loader10Seconds from "./components/spinner";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <TopStatus />
          <Level />
          <Points />
          <DailyTaskButton />
          <Warning />
          <Loader10Seconds />
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091f2c",
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
});
