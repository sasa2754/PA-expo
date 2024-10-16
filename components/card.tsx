import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        backgroundColor: '#D3D3D3FF',
        width: 300,
        padding: 3,
        gap: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    },
    title: {

    },
    image: {

    },
    description: {
        textAlign: 'center',
        padding: 6
    }
});

export const Card = ({title, description, image} : {title: string, description: string, image: any}) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}