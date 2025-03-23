import HeaderLessons from "@/components/header-lessons";
import { Stack } from "expo-router"

export default function Layout(){
    return <Stack screenOptions={{header: HeaderLessons}}/>
}