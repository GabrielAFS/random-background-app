import {
  generateHexColor,
  getComplementaryHexColor,
} from "@/utils/generateColor";

import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [textColor, setTextColor] = useState<string>("#000000");
  const [crazyMode, setCrazyMode] = useState<boolean>(false);

  const handleChangeColors = () => {
    const newBackgroundColor = generateHexColor();
    const newTextColor = getComplementaryHexColor(newBackgroundColor);

    setBackgroundColor(newBackgroundColor);
    setTextColor(newTextColor);
  };

  const toggleCrazyMode = () => {
    setCrazyMode((prevValue) => !prevValue);
  };

  useEffect(() => {
    let intervalId = null;

    if (crazyMode) {
      intervalId = setInterval(() => {
        handleChangeColors();
      }, 500);
    }

    return () => {
      clearInterval(intervalId as NodeJS.Timeout);
    };
  }, [crazyMode]);

  return (
    <Pressable
      style={styles.pressable}
      onPress={handleChangeColors}
      onLongPress={toggleCrazyMode}
    >
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
