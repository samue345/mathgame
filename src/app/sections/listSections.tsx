import {SectionList, StyleSheet, Text, View} from 'react-native';
import BasicOperations from './basicOperations/basicOperations';
import { colors } from "@/constants/colors";

const dataSections = [ 
    {
        title: 'Soma e Subtração',
        data: [{key: '1', component: <BasicOperations/>}]
    }
];

export default function listSections() {
    return (
        <View>
        <SectionList
          sections={dataSections}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => <View style={styles.container}>{item.component}</View>}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.teste}> 
                <Text style={styles.title}>{title}</Text>
            </View>
          )}
        />
      </View>
    );
}


const styles = StyleSheet.create({
    container: {alignItems: 'center', marginTop: 30 },
    item: { padding: 10, fontSize: 18, height: 44 },
    title: { fontSize: 18, fontWeight: 'bold', color: colors.white },
    teste: { backgroundColor: colors.redDark, padding: 10 }
  });
  