import { Platform, StyleSheet, Text, View } from "react-native"
import { Image } from "expo-image";

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        backgroundColor: '#FFFFFFFF',
        maxWidth: 330,
        padding: 5,
        gap: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        shadowColor: "#0000005E",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 7,
        alignSelf: 'center'
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
        borderRadius: 5,
        resizeMode: 'contain'
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
            <Image style={styles.image} source={{ uri : image }}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}