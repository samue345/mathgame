import { ReactNode } from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import SectionCard from './section-card';
import { colors } from "@/constants/colors";
import {addSubImgs, divMultiImgs, LogicImgs} from "@/constants/variables";
import { RelativePathString } from 'expo-router';
import { imageStyle } from '@/types/Image-style';

const ROUTES = {
  ADD_SUB_LESSON: "../lessons/basic-operations/add-sub/add-sub-lesson",
  MULTI_DIV_LESSON: "/sections/basic-operations/multi-div/multi-div-lesson",
  LOGIC_LESSON: "/sections/logic/logic-lesson",
};

interface SectionItem {
    key: string,
    image: number[],
    imageStyle: imageStyle,
    route: RelativePathString,
}

interface SectionData{
      title: string,
      data: SectionItem[]
}

const sectionsData: SectionData[] = [
  {
    title: 'Soma e Subtração',
    data: [
      {
        key: '1',
        image: addSubImgs,
        imageStyle: {width: 75, height: 75, tintColor: colors.white},
        route: ROUTES.ADD_SUB_LESSON as RelativePathString
      },
    ],
  },
  {
    title: 'Multiplicação e Divisão',
    data: [
      {
        key: '2',
        image: divMultiImgs,
        imageStyle: {width: 75, height: 75, tintColor: colors.white},
        route: ROUTES.MULTI_DIV_LESSON as RelativePathString,
      },
    ],
  },
  {
    title: 'Noções de Lógica',
    data: [
      {
        key: '3',
        image: LogicImgs,
        imageStyle: {width: 120, height: 120, tintColor: colors.white},
        route:  ROUTES.LOGIC_LESSON as RelativePathString
      },
    ],
  },
];


export default function ListSections() {
    return (
        <SectionList
          sections={sectionsData}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => 
          <View style={styles.content}>
              <SectionCard
                images={item.image}
                imageStyle={item.imageStyle}
                routeComponent={item.route}
              />
          </View>
          }
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
  