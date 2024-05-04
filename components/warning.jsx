import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Warning = () => {
  return (
    <View style={s.container}>
      <Text style={s.warningText}>
        WARNING: Failure to complete the daily quest will result in an
        appropriate <Text style={s.penalty}>penalty.</Text>
      </Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: "90%",
    paddingHorizontal: "10%",
    marginVertical: 20,
    paddingVertical: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  penalty: {
    fontSize: 15,
    letterSpacing: 2,
    color: "red",
    fontWeight: "700",
    textShadowColor: "#a93c63",
    textShadowOffset: { width: 1, height: 0.8 },
    textShadowRadius: 8,
  },
  warningText: {
    fontSize: 15,
    letterSpacing: 2,
    color: "white",
    fontWeight: "700",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 0.8 },
    textShadowRadius: 8,
  },
});

export default Warning;
