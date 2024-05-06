import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

const Loader10Seconds = () => {
  const [loadingProgress] = useState(new Animated.Value(0)); // Initialize loadingProgress as an Animated.Value

  useEffect(() => {
    const duration = 10 * 1000; // 10 seconds in milliseconds
    const animation = Animated.timing(loadingProgress, {
      toValue: 100,
      duration: duration,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size="large" color="#FFFFFF" /> */}
      <View style={styles.loader}>
        <Animated.View
          style={[
            styles.progressCircle,
            {
              transform: [
                {
                  rotate: loadingProgress.interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0deg", "360deg"],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={[styles.progressMask, { borderColor: "white" }]} />
        </Animated.View>
      </View>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    marginTop: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "red",
    overflow: "hidden",
  },
  progressCircle: {
    position: "absolute",
    top: -3,
    left: -3,
    width: 66,
    height: 66,
    borderRadius: 33,
    borderWidth: 3,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  progressMask: {
    flex: 1,
    backgroundColor: "transparent",
    borderLeftWidth: 3,
    borderBottomWidth: 3,
  },
  text: {
    fontSize: 20,
    color: "#FFFFFF",
    marginTop: 10,
  },
});

export default Loader10Seconds;
