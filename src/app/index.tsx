import {View, Text, StyleSheet} from "react-native";
import ListSections from "./sections/listSections";

export default function Index(){
    return (
        <View style={styles.container}>
            <ListSections/>
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {flex: 1}

})