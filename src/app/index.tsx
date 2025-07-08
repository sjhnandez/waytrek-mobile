import { useEffect, useState } from "react";
import { Text, View } from "react-native";
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
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Home</Text>
    </View>
  );
};

export default Index;
