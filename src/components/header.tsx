import { View, Text, StyleSheet } from "react-native";

export default function Header(){

    return (
        <View style={styles.container}>
            <Text>Vida</Text>
            <Text>Pontos</Text>
            <Text>Nome</Text>
            <Text>Ranking</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {padding: 20, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#dcdcdc'}
});