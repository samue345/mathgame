import {SectionList, StyleSheet, Text, View} from 'react-native';
import SectionCard from './section-card';
import { colors } from "@/constants/colors";
import {addSubImgs, divMultiImgs, LogicImgs} from "@/constants/variables";
import { RelativePathString } from 'expo-router';

const ROUTES = {
  ADD_SUB_LESSON: "../section-lessons/basic-operations/add-sub/add-sub-lesson",
  MULTI_DIV_LESSON: "/sections/basic-operations/multi-div/multi-div-lesson",
  LOGIC_LESSON: "/sections/logic/logic-lesson",
};


const dataSections = [
  {
    title: 'Soma e Subtração',
    data: [
      {
        key: '1',
        component: <SectionCard 
                    images={addSubImgs} 
                    imageStyle={{width: 75, height: 75, tintColor: colors.white}} 
                    routeComponent={ROUTES.ADD_SUB_LESSON as RelativePathString}
                    />
      },
    ],
  },
  {
    title: 'Multiplicação e Divisão',
    data: [
      {
        key: '2',
        component: <SectionCard 
                    images={divMultiImgs} 
                    imageStyle={{width: 75, height: 75, tintColor: colors.white}} 
                    routeComponent={ROUTES.MULTI_DIV_LESSON as RelativePathString}
                    />,
      },
    ],
  },
  {
    title: 'Noções de Lógica',
    data: [
      {
        key: '3',
        component: <SectionCard 
                    images={LogicImgs} 
                    imageStyle={{width: 120, height: 120, tintColor: colors.white}} 
                    routeComponent={ROUTES.LOGIC_LESSON as RelativePathString}
                    />
      },
    ],
  }
];


export default function ListSections() {
    return (
        <SectionList
          sections={dataSections}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => <View style={styles.content}>{item.component}</View>}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.header}> 
                <Text style={styles.title}>{title}</Text>
            </View>
          )}
        />
    );
}


const styles = StyleSheet.create({
    content: {alignItems: 'center', marginTop: 30, marginBottom: 30},
    item: { padding: 10, fontSize: 18, height: 44 },
    title: { fontSize: 18, fontWeight: 'bold', color: colors.white },
    header: { backgroundColor: colors.redDark, padding: 15, borderRadius: 15, width: '90%', marginStart: 14, marginTop: 15}
  });
  