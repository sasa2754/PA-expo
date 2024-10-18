import { Card } from "@/components/card";
import { Header } from "@/components/header";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import data from '@/constants/dataEx.json'

const styles = StyleSheet.create({
    cardBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5
    },
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    back: {
        paddingHorizontal: 20,
    },
    title: {
        margin: 4,
        fontWeight: 'bold'
    }
})

export default function List() {
    return (
        <>
            <Header title='List' image={require("../../assets/images/react-logo.png")}/>

             <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Listinha fofa</Text>
                <FlatList
                    style={styles.back}
                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={({item}) =>{
                        return (
                            <Card title={item.title} image={item.image} description={item.description}/>
                        )
                    }}
                />
            </SafeAreaView>
        </>
    )
}