import { Image, ImageSourcePropType, Text, View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#4B4B4BFF',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: 3,
        gap: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    title: {
        color: '#FFFFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        width: 40,
        height: 40
    }
    
});

export const Header = ({image, title} : {image: ImageSourcePropType | undefined, title: string}) => {
    return (
        <>
            <View style={styles.background}>
                <Image style={styles.image} source={image}/>
                <Text style={styles.title}>{title}</Text>
            </View>
        </>
    )
}
