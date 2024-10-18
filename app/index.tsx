import { Header } from "@/components/header"
import { Link, router } from "expo-router"
import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


const styles = StyleSheet.create({
    input: {
        height: 30,
        width: 300,
        borderColor: "#000000FF",
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 4,
        paddingVertical: 3
    },
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        justifyContent: 'center'
    },
    button: {
        borderColor: "#000000FF",
        borderWidth: 2,
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontFamily: 'Karla',
        fontWeight: 'bold',
    }
})

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const onPress = () => {
        router.push("/(tabs)");
    }

    console.log(email, pass)
    console.log(typeof email, typeof pass);

    return (
        <>
            <Header title='Login' image={require("@/assets/images/react-logo.png")}/>
            <SafeAreaView style={styles.container}>
                <Text>Login</Text>
                <View>
                    <Text>Email</Text>
                    <TextInput style={styles.input} onChangeText={setEmail} keyboardType="email-address"/>
                </View>
                
                <View>
                    <Text>Senha</Text>
                    <TextInput style={styles.input} onChangeText={setPass} keyboardType="default" secureTextEntry/>
                </View>
                
                <View>
                    <TouchableOpacity style={styles.button} onPress={onPress}>Enter</TouchableOpacity>
                    <Link href={"/register"}>Cadastrar novo usuário</Link>
                </View>
            </SafeAreaView>
        </>
    )
}