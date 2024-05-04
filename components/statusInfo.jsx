import { View, Text, StyleSheet } from "react-native";
import React from "react";

const StatusInfo = () => {
  return (
    <View style={s.statusInfo}>
      <View style={s.lvlContainer}>
        <Text style={s.count}>18</Text>
        <Text style={s.StatusInfo}>LEVEL</Text>
      </View>

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
    flex: 1,
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
  lvlContainer: {
    alignItems: "center",
  },
  count: {
    fontSize: 60,
    letterSpacing: 2,
    color: "white",
    // fontFamily: "FriendorFoeTallBB",
    fontWeight: "700",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 0.8 },
    textShadowRadius: 8,
  },
  StatusInfo: {
    fontSize: 20,
    letterSpacing: 2,
    color: "white",
    // fontFamily: "FriendorFoeTallBB",
    fontWeight: "500",
    textShadowColor: "white",
    textShadowOffset: { width: 2, height: 0.8 },
    textShadowRadius: 8,
  },
});

export default StatusInfo;
