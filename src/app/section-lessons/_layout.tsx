import HeaderSections from "@/components/header-sections";
import { Stack } from "expo-router"

export default function Layout(){
  return <Stack screenOptions={{header: () => <HeaderSections/>}}/>
}