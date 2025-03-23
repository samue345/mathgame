import { colors } from "@/constants/colors";
import {DefaultTheme,  ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router"

const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white,
    },
  };
  
export default function Layout(){
    return <ThemeProvider value={customTheme}>
            <Stack screenOptions={{ headerShown: false}}/>
           </ThemeProvider>
}
