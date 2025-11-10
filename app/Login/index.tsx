import { useWindowDimensions, View } from "react-native";
import DesktopSignUp from "./DesktopSignUp";
import MobileSignUp from "./MobileSignUp";
import TabletLandscapeSignUp from "./TabletLandscapeSignUp";
import TabletPortraitSignUp from "./TabletPortraitSignUp";

export default function SignupScreen() {
  const { width, height } = useWindowDimensions();

  const renderLayout = () => {
    // Mobile Portrait
    if (width < 721 && height > width) return <MobileSignUp />;

    // Mobile Landscape
    if (width < 721 && height <= width) return <TabletLandscapeSignUp />;

    // Tablet Portrait
    if (width >= 721 && width < 1200 && height > width)
      return <TabletPortraitSignUp />;

    // Tablet Landscape
    if (width < 1300 && height <= width) return <TabletLandscapeSignUp />;

    // Desktop
    return <DesktopSignUp />;
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {renderLayout()}
    </View>
  );
}
