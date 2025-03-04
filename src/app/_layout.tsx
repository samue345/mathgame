import Header from "@/components/header";
import { Stack } from "expo-router"
import { View } from "react-native";

export default function Layout(){
    return <Stack screenOptions={{header: () => <Header/>}}/>;
}