import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import Animated, { FadeOut } from "react-native-reanimated";
import Splash from "../components/pages/splash";

const RootLayout = () => {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const visibleTimer = setTimeout(() => setSplashVisible(false), 3000);

    return () => {
      clearTimeout(visibleTimer);
    };
  });

  return splashVisible ? (
    <Animated.View exiting={FadeOut} style={{ flex: 1 }}>
      <Splash />
    </Animated.View>
  ) : (
    <Stack screenOptions={{ headerShown: false }} />
  );
};

export default RootLayout;
