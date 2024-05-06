import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Points = () => {
  return (
    <View style={s.container}>
      <View style={s.abilityContainer}>
        <View>
          <Text style={s.ability}>STRENGTH: </Text>
          <Text style={s.points}>10</Text>
        </View>
        <View>
          <Text style={s.ability}>AGILITY: </Text>
          <Text style={s.points}>10</Text>
        </View>
        <View>
          <Text style={s.ability}>PERSONALITY: </Text>
          <Text style={s.points}>10</Text>
        </View>
      </View>
      <View style={s.abilityContainer}>
        <View>
          <Text style={s.ability}>VITALITY: </Text>
          <Text style={s.points}>10</Text>
        </View>
        <View>
          <Text style={s.ability}>INTELLIGENCE: </Text>
          <Text style={s.points}>10</Text>
        </View>

        <View style={s.lvlContainer}>
          <View style={s.abilityHead}>
            <Text style={s.StatusInfo}>Available</Text>
            <Text style={s.StatusInfo}>Ability</Text>
            <Text style={s.StatusInfo}>Points:</Text>
          </View>
          <Text style={s.count}>18</Text>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    width: "90%",
    alignSelf: "center",
    margin: 10,
    borderColor: "white",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  abilityContainer: {
    justifyContent: "space-around",
  },
  ability: {
    fontSize: 15,
    letterSpacing: 2,
    color: "white",
    fontWeight: "700",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 0.8 },
    textShadowRadius: 8,
  },
  points: {
    fontSize: 20,
    letterSpacing: 2,
    color: "white",
    fontWeight: "700",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 0.8 },
    textShadowRadius: 8,
  },
  StatusInfo: {
    fontSize: 7,
    letterSpacing: 2,
    color: "#8d98a4",
    // fontFamily: "FriendorFoeTallBB",
    fontWeight: "500",
    textShadowRadius: 8,
  },
  lvlContainer: {
    alignItems: "center",
    flexDirection: "row",
  },

  count: {
    fontSize: 40,
    letterSpacing: 2,
    color: "white",
    // fontFamily: "FriendorFoeTallBB",
    fontWeight: "500",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 0.8 },
    textShadowRadius: 8,
  },
  abilityHead: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default Points;
