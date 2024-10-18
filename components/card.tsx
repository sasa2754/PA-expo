import { Platform, StyleSheet, Text, View } from "react-native"
import { Image } from "expo-image";

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        backgroundColor: '#D3D3D3FF',
        maxWidth: 800,
        padding: 5,
        gap: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: 'Karla'
        // fontFamily: "aaa"
    },
    image: {
        width: 300,
        height: 200,
        margin: 5,
        borderRadius: 5
    },
    description: {
        textAlign: 'center',
        padding: 6,
        fontFamily: 'Karla'
    }
});

export const Card = ({title, description, image} : {title: string, description: string, image: string}) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}