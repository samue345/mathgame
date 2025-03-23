import { colors } from "@/constants/colors";
import { View, StyleSheet, Text, Image} from "react-native";
import Footer from "@/components/footer";
import { useState } from "react";

export default function AddSubLesson(){
    const [activeTab, setActiveTab] = useState(0)
    const tabContents = [
        <View style={styles.content}>
            <Text style={styles.title}>O que é adição?</Text>
            <View>
                <Text style={styles.description}>
                    A adição é uma operação matemática considerada básica.{"\n"}{"\n"}
                    Por exemplo, imagine que você tem <Text style={styles.bold}>1 maçã</Text> e quer comprar outra{" "}
                    <Text style={styles.bold}>maçã</Text> para presentear um amigo. A adição nos ajuda a descobrir quantas{" "}
                    <Text style={styles.bold}>maçãs</Text> teremos no total:
                </Text>
                <View style={styles.lessonContainer}>
                    <Image
                    source={require('./../../../../../assets/images/apple.png')}
                    />
                    <Text style={styles.bold}>+</Text>
                    <Image
                    source={require('./../../../../../assets/images/apple.png')}
                    />
                    <Text style={styles.bold}>=</Text>
                    <Image
                    source={require('./../../../../../assets/images/apple.png')}
                    />
                    <Image
                    source={require('./../../../../../assets/images/apple.png')}
                    />
                </View>
            </View>
        </View>,
        <View style={styles.content}>
            <Text style={styles.title} >O que é Subtração?</Text>
            <View>
               <Text style={styles.description}>
                    A subtração é uma operação matemática considerada básica.{"\n"}{"\n"}
                    Por exemplo, imagine que você tenha <Text style={styles.bold}>2 maçãs</Text>{" "}
                    e quer dar uma <Text style={styles.bold}>maçã</Text> um amigo. A subtração nos ajuda a descobrir quantas{" "}
                    <Text style={styles.bold}>maçãs</Text> teremos no total:
                </Text>
                <View style={styles.lessonContainer}>
                    <Image
                    source={require('./../../../../../assets/images/apple.png')}
                    />
                    <Text style={styles.bold}>-</Text>
                    <Image
                    source={require('./../../../../../assets/images/apple.png')}
                    />
                    <Text style={styles.bold}>=</Text>
                    <Image
                    source={require('./../../../../../assets/images/apple.png')}
                    />
                    <Image
                    source={require('./../../../../../assets/images/apple.png')}
                    />
                </View>
            </View>
        </View>,
        <View style={styles.content}>
            <Text style={styles.title} >Dica!</Text>
            <View>
            <Text style={styles.description}>
                   Tanto a adição quanto a subtração têm a mesma prioridade. Isso significa que quando aparecem juntas em uma expressão, 
                   você pode resolver de qualquer forma: da esquerda para a direita ou da direita para a esquerda. O resultado vai ser o mesmo!
                </Text>
            </View>
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
    content: {
        width: '85%', 
        marginTop: 20
    },
    viewContent: {
        width: '90%', 
        height: 300,
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 30,
        alignItems: 'center'
    },
    lessonContainer: {
        flexDirection: 'row', 
        gap: 10, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 45, 
        marginEnd: 25
    },
    title: {fontSize: 22, marginTop: 10, fontWeight: 'bold', marginStart: 15},
    description: {fontSize: 12, marginTop: 10, marginStart: 15},
    bold: {fontWeight: 'bold'}
})