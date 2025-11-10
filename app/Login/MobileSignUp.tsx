import React from "react";
import { TextInput, View } from "react-native";

type Props = {};

const MobileSignUp = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput placeholder=" enter something" />
    </View>
  );
};

export default MobileSignUp;
