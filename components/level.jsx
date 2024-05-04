import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Level = () => {
  return (
    <View>
      <View style={s.lvlContainer}>
        <Text style={s.count}>18</Text>
        <Text style={s.StatusInfo}>LEVEL</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
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
});

export default Level;
