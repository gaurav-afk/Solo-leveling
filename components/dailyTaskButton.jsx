import { View, Text, StyleSheet } from "react-native";
import React from "react";

const DailyTaskButton = () => {
  return (
    <View style={s.button}>
      <Text style={s.buttonText}>START DAILY TASK</Text>
    </View>
  );
};

const s = StyleSheet.create({
  button: {
    width: "90%",
    borderWidth: 0.5,
    borderColor: "white",
    paddingHorizontal: "5%",
    marginTop: 20,
    paddingVertical: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    letterSpacing: 8,
    color: "white",
    fontWeight: "500",
    // fontFamily: "FriendorFoeTallBB",
    textShadowOffset: { width: 2, height: 0.8 },
    textShadowRadius: 8,
  },
});

export default DailyTaskButton;
