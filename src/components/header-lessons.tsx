import { colors } from "@/constants/colors";
import { View, Text, StyleSheet } from "react-native";
import Heart from "./Icons/heart";
import ProgressBar from "./progress-bar";
export default function HeaderSections(){

    return (
        <View style={styles.container}>
          <ProgressBar/>
          <View style={styles.flexCenterContainer}> 
           <Heart width={32}/>
           <Text style={styles.navbarText}>5</Text>
          </View>       
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      height: 50, 
      backgroundColor: colors.white, 
      borderColor: colors.gray, 
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    navbarText: {marginStart: 5, color: colors.redDark, fontSize: 25},
    flexCenterContainer: {flexDirection: 'row', alignItems: 'center'}
});