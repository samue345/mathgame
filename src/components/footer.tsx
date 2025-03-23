import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { useState } from 'react';
import { colors } from "@/constants/colors"
import { Tabs } from "@/types/tabs";
import { router } from "expo-router"

export default function Footer({contentsLength, defaultTab, onTabChange }: Tabs){
    const [activeTab, setActiveTab] = useState(defaultTab);
    
    const handleContinue = () => {

        const lastIndex = contentsLength - 1;

        if(lastIndex ===  activeTab){
          router.navigate('../add-sub/add-sub-exercises');
        }

        const index: number = activeTab + 1;

        setActiveTab(index);
        
        if(onTabChange){
            onTabChange(index)
        }
    }

    return (
            <View style={styles.footer}>
              <View style={styles.tabContainer}>
                  {Array.from({ length: contentsLength }, (_, index) => (
                      <View
                        key={index}
                        style={[
                          styles.tabIndicator,
                          index === activeTab ? styles.activeTabIndicator : null
                        ]}
                      />
                  ))}
               </View>
               <TouchableOpacity 
                style={styles.buttonStyle} 
                onPress={() =>handleContinue()}
               >
                <Text style={styles.text}>Continuar</Text>
               </TouchableOpacity>
           </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: colors.gray
      },
      text: {
        color: colors.white,
        fontSize: 16,
      },
      buttonStyle: {
        backgroundColor: colors.redDark,
        width: '70%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 8,
      },
      tabContainer: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around'
      },
      tabIndicator: {
        width: 60,
        height: 10,
        borderRadius: 20,
        backgroundColor: colors.gray,
        margin: 4
      },
      activeTabIndicator: {
        backgroundColor: colors.redDark,
      },
  });
  