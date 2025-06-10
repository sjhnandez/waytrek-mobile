import { ImageBackground, View } from "react-native";
import { WithLocalSvg } from "react-native-svg/css";

export default function Splash() {
  return (
    <ImageBackground
      source={require("@/src/assets/images/splash.png")}
      imageStyle={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: "9px",
          alignItems: "center",
        }}
      >
        <WithLocalSvg asset={require("@/src/assets/icons/logo.svg")} />
      </View>
    </ImageBackground>
  );
}
