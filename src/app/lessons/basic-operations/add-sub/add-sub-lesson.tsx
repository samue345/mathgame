import { colors } from "@/constants/colors";
import { View, StyleSheet, Text, Button } from "react-native";
import Footer from "@/components/footer";
import {useState } from "react";

export default function AddSubLesson(){
    const [activeTab, setActiveTab] = useState(0)
    
    const tabContents = [
        <View style={{alignItems: 'center'}}>
            <Text style={styles.title} >O que é adição?</Text>
            <View>
                <Text>
                  A adição é uma operação matemática considerada básica.
                  por exemlo, se tenho 8 bananas e compro mais 5 bananas, a adição é a operação que vai calcular a quantidade total de bananas
                </Text>
                <View>
                    
                </View>
            </View>
        </View>,
        <View>
            <Text>Conteúdo 2</Text>
        </View>,
        <View>
            <Text>Conteúdo 3</Text>
        </View>,
        <View>
            <Text>Conteúdo 3</Text>
        </View>,
        <View>
            <Text>Conteúdo 3</Text>
        </View>,
    ];

    return (
        <View style={styles.container}>
           <View style={styles.viewContent}>
                {tabContents[activeTab]}
           </View>
           <Footer
             contentsLength={tabContents.length}
             defaultTab={0}
             onTabChange={(index: number) => setActiveTab(index)}
           />
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    viewContent: {
        width: '90%', 
        height: 300,
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 30,
        alignItems: 'center'
    },
    title: {fontSize: 30, marginTop: 10, fontWeight: 'bold'}
})