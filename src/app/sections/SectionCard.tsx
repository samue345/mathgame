import { colors } from "@/constants/colors";
import {StyleSheet, View, Image } from "react-native";

interface imageStyle{
  width: number;
  height: number;
  tintColor: string;
}

export default function SectionCard({images, imageStyle}: {images: number[], imageStyle: imageStyle })
{
    const arrayLengthEven = images.length % 2 === 0;
    const size = arrayLengthEven ? '50%' : '100%';

    return (
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