import { Image, ImageSourcePropType, Text, View, StyleSheet, SafeAreaView } from "react-native"

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#7511B8FF',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        height: 80,
        paddingVertical: 5,
        gap: 12,
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
        fontWeight: 'bold',
        bottom: 6
    },
    image: {
        width: 35,
        height: 35,
        bottom: 4
    }
    
});

export const Header = ({image, title} : {image: ImageSourcePropType | undefined, title: string}) => {
    return (
        <>
            <SafeAreaView style={styles.background}>
                <Image style={styles.image} source={image}/>
                <Text style={styles.title}>{title}</Text>
            </SafeAreaView>
        </>
    )
}
