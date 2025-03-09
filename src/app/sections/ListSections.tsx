import {SectionList, StyleSheet, Text, View} from 'react-native';
import SectionCard from './SectionCard';
import { colors } from "@/constants/colors";
import {additionSubtractionImages, divMultiImages, LogicImages} from "@/constants/variables";

const dataSections = [
  {
    title: 'Soma e Subtração',
    data: [
      {
        key: '1',
        component: <SectionCard images={additionSubtractionImages} imageStyle={{width: 75, height: 75, tintColor: colors.white}} />,
      },
    ],
  },
  {
    title: 'Multiplicação e Divisão',
    data: [
      {
        key: '2',
        component: <SectionCard images={divMultiImages} imageStyle={{width: 75, height: 75, tintColor: colors.white}}/>,
      },
    ],
  },
  {
    title: 'Noções de Lógica',
    data: [
      {
        key: '3',
        component: <SectionCard images={LogicImages} imageStyle={{width: 120, height: 120, tintColor: colors.white}}/>,
      },
    ],
  }
];


export default function ListSections() {
    return (
        <View>
        <SectionList
          sections={dataSections}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => <View style={styles.container}>{item.component}</View>}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.header}> 
                <Text style={styles.title}>{title}</Text>
            </View>
          )}
        />
      </View>
    );
}


const styles = StyleSheet.create({
    container: {alignItems: 'center', marginTop: 30, marginBottom: 30},
    item: { padding: 10, fontSize: 18, height: 44 },
    title: { fontSize: 18, fontWeight: 'bold', color: colors.white },
    header: { backgroundColor: colors.redDark, padding: 10, borderRadius: 10}
  });
  