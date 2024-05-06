import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

const LoaderComponent = () => {
  const totalTime = 10; // Total time in seconds
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isLoading, setIsLoading] = useState(true);

  // Start countdown when component mounts
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTimeLeft = prevTime - 1;
        if (newTimeLeft <= 0) {
          clearInterval(timer); // Stop timer when timeLeft reaches 0
          setIsLoading(false); // Hide the activity indicator
          return 0;
        }
        return newTimeLeft;
      });
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means run effect only once on mount

  // Calculate progress percentage
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <View style={styles.container}>
      {isLoading && (
        <>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.progressText}>{Math.floor(progress)}%</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    marginTop: 20,
    fontSize: 24,
    color: "#3498db",
  },
});

export default LoaderComponent;
