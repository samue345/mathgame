import { colors } from "@/constants/colors";
import { View, Text, StyleSheet } from "react-native";
import Heart from "./Icons/heart";
import Trophy from "./Icons/trophy";
import Ranking from "./Icons/ranking";
import Flame from "./Icons/flame";
export default function Header(){

    return (
        <View style={styles.container}>
            <View style={styles.flexCenterContainer}>
              <Heart width={20}/>
              <Text style={styles.navbarText}>5</Text>
            </View>
            <View style={styles.flexCenterContainer}>
              <Trophy/>
              <Text style={styles.navbarText}>5</Text>
            </View>
            <View style={styles.flexCenterContainer}>
              <Ranking/>
              <Text style={styles.navbarText}>5</Text>
            </View>
            <View style={styles.flexCenterContainer}>
              <Flame/>
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