import { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";
import Splash from "../components/pages/splash";
import useFontsLoaded from "../hooks/useFontsLoaded";

const splashDuration = 2;

const Index = () => {
  const [splashVisible, setSplashVisible] = useState(true);
  const fontsLoaded = useFontsLoaded();

  useEffect(() => {
    const visibleTimer = setTimeout(
      () => setSplashVisible(false),
      1000 * splashDuration
    );

    return () => {
      clearTimeout(visibleTimer);
    };
  }, []);

  return splashVisible || !fontsLoaded ? (
    <Animated.View exiting={FadeOut} style={{ flex: 1 }}>
      <Splash />
    </Animated.View>
  ) : (
    <View>Home</View>
  );
};

export default Index;
