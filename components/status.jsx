import { View, Text, StyleSheet, hideAsync } from "react-native";
import { React, useEffect, SplashScreen } from "react";
import { useFonts } from "expo-font";
// import { ForFoe } from "../assets/fonts";

const TopStatus = () => {
  const [fontsLoaded, error] = useFonts({
    FriendorFoeTallBB: require("../assets/fonts/FriendorFoeTallBB.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <View>
      <Text style={s.status}>STATUS</Text>
    </View>
  );
};

const s = StyleSheet.create({
  status: {
    borderWidth: 0.5, 
    borderColor: "white", 
    paddingHorizontal: "20%",
    paddingVertical: 10,
    fontSize: 40,
    alignSelf: "center",
    letterSpacing: 8,
    color: "white",
    fontWeight: "500",
    // fontFamily: "FriendorFoeTallBB",
    textShadowColor: "white",
    textShadowOffset: { width: 2, height: 0.8 },
    textShadowRadius: 8,
  },
});

export default TopStatus;
