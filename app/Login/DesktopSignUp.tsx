import React from "react";
import { Text, TextInput, View } from "react-native";

type Props = {};

const DesktopSignUp = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
      }}
    >
      <Text style={{ color: "black" }}>Desktop Signup</Text>
      <TextInput placeholder=" enter something" />
    </View>
  );
};

export default DesktopSignUp;
