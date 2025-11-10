import React from "react";
import { Text, TextInput, View } from "react-native";

type Props = {};

const TabletLandscapeSignUp = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
      }}
    >
      <Text style={{ color: "black" }}>Tablet Landscape Signup</Text>
      <TextInput placeholder=" enter something" />
    </View>
  );
};

export default TabletLandscapeSignUp;
