import { colors } from "@/constants/colors";
import { View, Text, StyleSheet } from "react-native";
import Heart from "./Icons/heart";
export default function HeaderSections(){

    return (
        <View style={styles.container}>
            <Text>Barra de progresso</Text>
            <View style={styles.flexCenterContainer}>
              <Heart/>
              <Text style={styles.navbarText}>5</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      padding: 8, 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      backgroundColor: colors.white, 
      borderColor: colors.gray, 
      borderBottomWidth: 1
    },
    navbarText: {padding: 6, color: colors.black, fontSize: 20},
    flexCenterContainer: {flexDirection: 'row', alignItems: 'center'}
});