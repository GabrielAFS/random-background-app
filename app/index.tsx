import generateHexColor from "@/utils/generateColor";

import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [backgroundColor, setBackgroundColor] = useState<string>("");

  const onTouchScreen = () => {
    setBackgroundColor(generateHexColor());
  };

  return (
    <Pressable style={styles.pressable} onPress={onTouchScreen}>
      <View style={{ ...styles.container, backgroundColor }}>
        <Text style={styles.text}>Hello there</Text>
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
    fontSize: 20,
  },
});
