import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const DailyTaskButton = ({ onPress, buttonText }) => {
  return (
    <View style={s.button}>
      <TouchableOpacity onPress={onPress}>
        <Text style={s.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  button: {
    width: "96%",
    borderWidth: 0.5,
    borderColor: "white",
    paddingHorizontal: "5%",
    marginTop: 20,
    paddingVertical: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    letterSpacing: 8,
    color: "white",
    fontWeight: "500",
    // fontFamily: "FriendorFoeTallBB",
    textShadowOffset: { width: 2, height: 0.8 },
    textShadowRadius: 8,
  },
});

export default DailyTaskButton;
