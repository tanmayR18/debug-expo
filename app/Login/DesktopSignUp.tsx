import React from "react";
import { TextInput, View } from "react-native";

type Props = {};

const DesktopSignUp = (props: Props) => {
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

export default DesktopSignUp;
