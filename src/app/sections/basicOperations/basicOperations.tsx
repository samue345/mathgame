import { colors } from "@/constants/colors";
import { Text, StyleSheet, View, Image } from "react-native";

export default function basicOperations(){
    return (
        <View style={styles.card}>
               <Image
                 style={styles.image}
                 source={require('../../../../assets/images/add-and-sub.png')}
                />
                <Image
                 style={styles.image}
                 source={require('../../../../assets/images/add-and-sub.png')}
                />
                <Image
                 style={styles.image}
                 source={require('../../../../assets/images/add-and-sub.png')}
                />
                <Image
                 style={styles.image}
                 source={require('../../../../assets/images/add-and-sub.png')}
                />
        </View>
    );
}

const styles = StyleSheet.create({
        card: {
            backgroundColor: colors.redWine, 
            width: 220, 
            height: 220, 
            borderRadius: 30, 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 10,
        },
        title: {fontSize: 30, fontWeight: 'bold', color: colors.black},
        image: {width: 75, height: 75, marginTop: 30, tintColor: colors.white}
})