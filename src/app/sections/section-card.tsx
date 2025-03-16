import { colors } from "@/constants/colors";
import {StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { imageStyle } from "@/app/sections/interfaces/Image-style";
import { router, RelativePathString } from "expo-router";

export default function SectionCard({images, imageStyle, routeComponent}: {images: number[], imageStyle: imageStyle, routeComponent: RelativePathString })
{
    const arrayLengthEven = images.length % 2 === 0;
    const size = arrayLengthEven ? '50%' : '100%';
    
    return (
        <TouchableOpacity onPress={() => router.navigate(routeComponent)}>
            <View style={styles.card}>
            {
                images.map((image, index) =>(
                    <View
                    key={index}
                    style={[
                        { alignItems: 'center', justifyContent: 'center', width: size, height: size }, 
                        (index % 2 === 0 && arrayLengthEven) && styles.borderRight,
                        index < 2 && arrayLengthEven && styles.borderBottom
                    ]}
                    >
                        <Image
                        style={imageStyle}
                        source={image}
                        />
                    </View>
                ))
            }
            </View>
        </TouchableOpacity>
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
        },
        borderRight: { borderRightWidth: 1, borderColor: colors.black },
        borderBottom: { borderBottomWidth: 1, borderColor: colors.black },
})