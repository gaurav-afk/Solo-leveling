import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Level from "./level";

const StatusInfo = () => {
  return (
    <View style={s.statusInfo}>
      <Level />

      <View style={s.jobAndTitleContainer}>
        <View style={s.keyContainer}>
          <Text style={s.heading}>JOB: </Text>
          <Text style={s.heading}>TITLE: </Text>
        </View>
        <View style={s.valueContainer}>
          <Text style={s.key}>None</Text>
          <Text style={s.key}>Wolf Assassin</Text>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  statusInfo: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",
  },
  jobAndTitleContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  keyContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  valueContainer: {
    flexDirection: "column",
  },
  key: {
    fontSize: 15,
    letterSpacing: 2,
    color: "white",
    fontWeight: "700",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 0.8 },
    textShadowRadius: 8,
  },
  heading: {
    fontSize: 15,
    letterSpacing: 2,
    color: "white",
  },
});

export default StatusInfo;
