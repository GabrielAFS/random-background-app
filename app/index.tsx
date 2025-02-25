import {
  generateHexColor,
  getComplementaryHexColor,
} from "@/utils/generateColor";

import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [textColor, setTextColor] = useState<string>("#000000");

  const onTouchScreen = () => {
    const newBackgroundColor = generateHexColor();
    const newTextColor = getComplementaryHexColor(newBackgroundColor);

    setBackgroundColor(newBackgroundColor);
    setTextColor(newTextColor);
  };

  return (
    <Pressable style={styles.pressable} onPress={onTouchScreen}>
      <View style={{ ...styles.container, backgroundColor }}>
        <Text style={{ ...styles.text, color: textColor }}>Hello there</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
  },
});
